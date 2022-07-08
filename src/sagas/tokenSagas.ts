import { put, call, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  loadToken,
  loadTokenSuccess,
  loadTokenFailure,
  TokenPayload,
} from "../features/auth/tokenSlice";
import { signProf } from "./profile";

const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

export function* signToken(actition: PayloadAction<TokenPayload>) {
  console.log(localStorage.getItem("accessTokens"));
  try {
    const response: Response = yield fetch(
      "https://studapi.teachmeskills.by/auth/jwt/create/",
      {
        method: "POST",
        body: JSON.stringify(actition.payload),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    );
    const data: {
      refresh: string;
      access: string;
    } = yield response.json();
    console.log(actition.payload);

    console.log(data);
    localStorage.setItem("authTokens", JSON.stringify(data));
    localStorage.setItem("accessTokens", data.access);
    localStorage.setItem("refreshTokens", data.refresh);
    console.log(localStorage.getItem("accessTokens"));
    yield put(loadTokenSuccess(data));
  } catch (error: any) {
    yield put(loadTokenFailure(error.message));
  }
}
export function* tokenSaga() {
  yield takeEvery("token/loadToken", signToken);
}
