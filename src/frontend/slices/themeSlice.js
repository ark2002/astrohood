import { createSlice } from "@reduxjs/toolkit";

const initialState = { currTheme: "dark" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.currTheme === "dark") {
        state.currTheme = "light";
        document.documentElement.className = "light";
        localStorage.setItem("THEME", "light");
      } else {
        state.currTheme = "dark";
        document.documentElement.className = "dark";
        localStorage.setItem("THEME", "dark");
      }
    },
    setTheme: (state, action) => {
      state.currTheme = action.payload;
      document.documentElement.className = action.payload;
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { toggleTheme, setTheme } = themeSlice.actions;
