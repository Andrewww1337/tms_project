import jwtDecode, { JwtPayload } from "jwt-decode";

interface IError {
  detail: string;
}

const refreshToken = async (refresh: string) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=utf-8",
  };
  const response = await fetch(
    "https://studapi.teachmeskills.by/auth/jwt/refresh/",
    {
      method: "POST",
      body: `{"refresh": "${refresh}"}`,
      headers,
    }
  );
  const data = await response.json();

  if (!response.ok) {
    return Promise.reject(data as IError);
  }

  localStorage.setItem("accessTokens", data.access);

  return data.access as string;
};

export const customFetch = async (url: string, config: any = {}) => {
  let access = localStorage.getItem("accessTokens");
  const refresh = localStorage.getItem("refreshTokens");
  console.log(refresh);
  try {
    if (access) {
      const accessToken = jwtDecode<JwtPayload>(access);

      const expirationMillisTime = accessToken?.exp
        ? accessToken.exp * 1000
        : 0;
      const isAccessExpired = expirationMillisTime
        ? expirationMillisTime - Date.now() < 0
        : false;

      if (isAccessExpired) {
        try {
          const refresh = localStorage.getItem("refreshTokens");
          console.log(refresh);
          if (refresh) {
            access = await refreshToken(refresh);
          }
        } catch (error) {
          console.log("Error with getting token", error);
        }
      }

      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${access}`, //!!
      };
      const response = await fetch(url, config);
      return response;
    }
  } catch (error) {
    console.log(`Error with fetching resource ${url}`, error);
  }
};
