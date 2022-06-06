import { configureStore } from "@reduxjs/toolkit";
import { authReducer, themeReducer, postsReducer } from "./frontend/slices";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    post: postsReducer,
  },
});
