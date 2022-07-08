import { put, call, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  getPostFailure,
  getPostSuccess,
  getOnePostSuccess,
  OnePost,
} from "../features/posts";

export function* getOnePost(action: PayloadAction<number>) {
  try {
    const response: Response = yield call(() =>
      fetch(`https://www.omdbapi.com/?apikey=4523a71b&i=${action.payload}`)
    );
    console.log(`${action.payload}`);
    const data: OnePost = yield response.json();
    console.log(data);
    yield put(getOnePostSuccess(data));
  } catch (error: any) {
    yield put(getPostFailure(error.message));
  }
}

export function* onePostSaga() {
  yield takeEvery("posts/getOnePost", getOnePost);
}
