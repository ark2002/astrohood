import { configureStore } from "@reduxjs/toolkit";
import { authReducer, themeReducer } from "./frontend/slices";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
  },
});
