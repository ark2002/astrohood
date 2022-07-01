import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  themeReducer,
  postsReducer,
  userReducer,
} from "./frontend/slices";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    post: postsReducer,
    user: userReducer,
  },
});
