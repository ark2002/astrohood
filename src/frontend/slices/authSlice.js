import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInService, signUpService } from "../services";

const initialState = {
  isAuth: localStorage.getItem("AUTH_TOKEN") ? true : false,
  token: localStorage.getItem("AUTH_TOKEN"),
  loading: false,
  error: true,
  currUser: JSON.parse(localStorage.getItem("ASTROHOOD_USER")),
};

export const signInHandler = createAsyncThunk(
  "/auth/signInUser",
  async (user, { rejectWithValue }) => {
    try {
      const data = await signInService(user);
      const { foundUser, encodedToken } = data;
      if (encodedToken !== undefined) {
        localStorage.setItem("AUTH_TOKEN", encodedToken);
        localStorage.setItem("ASTROHOOD_USER", JSON.stringify(foundUser));
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signUpHandler = createAsyncThunk(
  "/auth/signUpUser",
  async (user, { rejectWithValue }) => {
    try {
      const data = await signUpService(user);
      const { createdUser, encodedToken } = data;
      if (encodedToken !== undefined) {
        localStorage.setItem("AUTH_TOKEN", encodedToken);
        localStorage.setItem("ASTROHOOD_USER", JSON.stringify(createdUser));
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOutHandler: (state) => {
      localStorage.removeItem("AUTH_TOKEN");
      localStorage.removeItem("ASTROHOOD_USER");
      state.isAuth = false;
      state.token = "";
      state.currUser = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInHandler.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(signInHandler.fulfilled, (state, action) => {
        state.isAuth = true;
        state.token = action.payload.encodedToken;
        state.loading = false;
        state.error = false;
        state.currUser = action.payload.foundUser;
      })
      .addCase(signInHandler.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(signUpHandler.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(signUpHandler.fulfilled, (state, action) => {
        state.isAuth = true;
        state.token = action.payload.encodedToken;
        state.loading = false;
        state.error = false;
        state.currUser = action.payload.createdUser;
      })
      .addCase(signUpHandler.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { signOutHandler } = authSlice.actions;
