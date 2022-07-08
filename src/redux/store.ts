import { configureStore } from "@reduxjs/toolkit";
import creteSagaMiddleware from "redux-saga";
import { authReducer } from "../features/auth";
import { tokenReducer } from "../features/auth";
import { tokenSaga } from "../sagas/tokenSagas";
import { signUpSaga } from "../sagas/signUpSagas";
import { postsReducer } from "../features/posts";
import { postSaga } from "../sagas/postSagas";
import { onePostSaga } from "../sagas/onePostSaga";
import { profilSaga } from "../sagas/profile";

const sagaMiddleware = creteSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    token: tokenReducer,
    posts: postsReducer,
  },
  middleware: (getDefauitMiddleware) => {
    return getDefauitMiddleware().concat(sagaMiddleware);
  },
});
sagaMiddleware.run(signUpSaga);
sagaMiddleware.run(tokenSaga);
sagaMiddleware.run(postSaga);
sagaMiddleware.run(onePostSaga);
sagaMiddleware.run(profilSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
