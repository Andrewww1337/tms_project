import { put, call, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  type TokenError,
  type TokenSuccessPayload,
  loadToken,
  loadTokenSuccess,
  loadTokenFailure,
  TokenPayload,
} from "../features/auth/tokenSlice";
import { signProf } from "./profile";

const TokenRequest = async (
  payload: TokenPayload
): Promise<TokenSuccessPayload> => {
  const response = await fetch(
    "https://studapi.teachmeskills.by/auth/jwt/create/",
    {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    return Promise.reject(data as TokenError);
  }

  localStorage.setItem("authTokens", JSON.stringify(data));
  localStorage.setItem("accessTokens", data.access);
  localStorage.setItem("refreshTokens", data.refresh);
  return data as TokenSuccessPayload;
};

export function* signToken(actition: PayloadAction<TokenPayload>) {
  console.log(localStorage.getItem("accessTokens"));
  try {
    const data: TokenSuccessPayload = yield call(
      TokenRequest,
      actition.payload
    );
    yield put(loadTokenSuccess(data));
  } catch (error: any) {
    yield put(loadTokenFailure(error));
  }
}
export function* tokenSaga() {
  yield takeEvery("token/loadToken", signToken);
}
