import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  user: SignUpSuccessPayload | null;
  isLoading: string;
  error: string | null;
};

type User = {
  name: string;
};

export type SignUpSuccessPayload = {
  username: string;
  email: string;
  id: number;
};

export type SignUpPayload = {
  name: string;
  email: string;
  password: string;
};

const initialState: AuthState = {
  user: null,
  isLoading: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action: any) => {
      console.log("ggg");
      if (state.isLoading === "idle") {
        state.isLoading = "pending";
        state.user = action.payload;
      }
    },
    signUpSuccess: (state, action: PayloadAction<SignUpSuccessPayload>) => {
      console.log("ggg");
      if (state.isLoading === "pending") {
        state.isLoading = "idle";
        state.user = action.payload;
        console.log(action.payload);
      }
    },
    signUpFailure: (state, action: PayloadAction<string>) => {
      console.log("ggg");
      state.isLoading = "idle";
      state.error = action.payload;
      console.log(action.payload);
    },
  },
});

export const { signUpSuccess, signUp, signUpFailure } = authSlice.actions;

export default authSlice.reducer;
