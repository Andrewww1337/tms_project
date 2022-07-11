import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export type TokenSuccessPayload = {
  refresh: string;
  access: string;
};

export type TokenPayload = {
  email: string;
  password: string;
};
export type TokenError = {
  detail: string;
};
type TokenState = {
  token: TokenSuccessPayload | null;
  isLoading: string;
  error: TokenError | null;
};
const initialState: TokenState = {
  token: null,
  isLoading: "idle",
  error: null,
};
export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    loadToken: (state, action: any) => {
      console.log("ggg");
      if (state.isLoading === "idle") {
        state.isLoading = "pending";
        state.token = action.payload;
      }
    },
    loadTokenSuccess: (state, action: PayloadAction<TokenSuccessPayload>) => {
      console.log("ggg");
      if (state.isLoading === "pending") {
        state.isLoading = "idle";
        state.token = action.payload;
      }
    },
    loadTokenFailure: (state, action: PayloadAction<TokenError>) => {
      console.log("ggg");
      state.isLoading = "idle";
      state.error = action.payload;
    },
  },
});
export const { loadToken, loadTokenSuccess, loadTokenFailure } =
  tokenSlice.actions;

export default tokenSlice.reducer;
