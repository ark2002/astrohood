import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./frontend/slices";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
