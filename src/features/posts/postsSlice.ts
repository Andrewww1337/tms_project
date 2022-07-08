import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { server } from "typescript";

export type Post = {
  Search: search;
  totalResults: string;
  Response: string;
};
type search = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}[];
export type OnePost = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Ratings;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};
type Ratings = {
  Source: string;
  Value: string;
}[];

interface PostsState {
  content: search | null;
  num: string;
  name: null | string;
  postSearch: string;
  onePost: OnePost | null;
  isLoading: "idle" | "pending";
  error: string | null;
}

const initialState: PostsState = {
  num: "2",
  name: null,
  onePost: null,
  content: null,
  postSearch: "y2022&s=all&page=1",
  isLoading: "idle",
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      console.log(action);
    },
    delPost: (state, action: PayloadAction<null>) => {
      state.content = action.payload;
    },
    getProps: (state, action: PayloadAction<string>) => {
      state.postSearch = action.payload;
      console.log(action.payload);
    },
    delProps: (state, action: PayloadAction<string>) => {
      state.num = action.payload;
    },
    getOnePost: (state, action: PayloadAction<string>) => {
      if (state.isLoading === "idle") {
        state.isLoading = "pending";
        console.log(action.payload);
      }
    },

    getOnePostSuccess: (state, action: PayloadAction<OnePost>) => {
      if (state.isLoading === "pending") {
        state.isLoading = "idle";
        state.onePost = action.payload;
      }
    },

    getPost: (state, action: PayloadAction<string>) => {
      if (state.isLoading === "idle") {
        state.isLoading = "pending";
        console.log(action.payload);
      }
    },
    getPostSuccess: (state, action: PayloadAction<search>) => {
      if (state.isLoading === "pending") {
        state.isLoading = "idle";

        if (state.content === null) {
          state.content = action.payload;
          console.log(action.type);
        } else {
          state.content = [...state.content, ...action.payload];
          console.log("da");
        }
      }
    },
    getPostFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = "idle";
      state.error = action.payload;
    },
  },
});

export const {
  getOnePost,
  getName,
  getOnePostSuccess,
  delPost,
  getProps,
  delProps,
  getPost,
  getPostSuccess,
  getPostFailure,
} = postsSlice.actions;

export default postsSlice.reducer;
