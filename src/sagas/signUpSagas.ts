import { put, call, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  signUpFailure,
  SignUpPayload,
  signUpSuccess,
} from "../features/auth/authSlice";

const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

export function* signUpp(actition: PayloadAction<SignUpPayload>) {
  try {
    const response: Response = yield fetch(
      "https://studapi.teachmeskills.by/auth/users/",
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
      username: string;
      email: string;
      id: number;
    } = yield response.json();
    console.log(JSON.stringify(actition.payload));
    yield put(signUpSuccess(data));
  } catch (error: any) {
    yield put(signUpFailure(error.message));
  }
}
export function* signUpSaga() {
  yield takeEvery("auth/signUp", signUpp);
}
