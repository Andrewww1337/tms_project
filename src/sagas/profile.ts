import { put, call, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import {
  loadToken,
  loadTokenSuccess,
  loadTokenFailure,
  TokenPayload,
} from "../features/auth/tokenSlice";
import { customFetch } from "../utils/customFeach";
import { getName } from "../features/posts";

const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

export function* signProf() {
  console.log(localStorage.getItem("accessTokens"));
  try {
    const response: Response = yield call(() =>
      customFetch("https://studapi.teachmeskills.by/auth/users/me/", {
        method: "GET",

        headers: {
          Authorization: `Bearer 
        localStorage.getItem("accessTokens")
      }`,
        },
      })
    );
    const data: { username: string; id: string; email: string } =
      yield response.json();
    console.log(response);
    yield put(getName(data.username));
    localStorage.setItem("userName", data.username);
    localStorage.setItem("userId", data.id);
    localStorage.setItem("userEmail", data.email);

    console.log(localStorage.getItem("userId"));
    console.log(localStorage.getItem("userEmail"));
    console.log(localStorage.getItem("accessTokens"));
  } catch (error: any) {
    yield put(getName(error.message));
  }
}

export function* profilSaga() {
  yield takeEvery("token/loadTokenSuccess", signProf);
}
