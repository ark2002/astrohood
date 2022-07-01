import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  editUserDetailService,
  followAUserService,
  getAllUsersService,
  getSingleUserService,
  unfollowAUserService,
} from "../services";

const initialState = {
  allUsers: [],
  userDetails: {},
  userPosts: [],
  suggestions: [],
};

export const getAllUsersHandler = createAsyncThunk(
  "/users/allUsers",
  async (token, { rejectWithValue }) => {
    try {
      const data = await getAllUsersService(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSingleUserHandler = createAsyncThunk(
  "/users/singleUser",
  async ({ token, username }, { rejectWithValue }) => {
    try {
      const data = await getSingleUserService(token, username);
      console.log(data, "slice");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const followUserHandler = createAsyncThunk(
  "/users/followUser",
  async ({ token, followUserId }, { rejectWithValue }) => {
    try {
      const data = await followAUserService(token, followUserId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const unFollowUserHandler = createAsyncThunk(
  "/users/unFollowUser",
  async ({ token, followUserId }, { rejectWithValue }) => {
    try {
      const data = await unfollowAUserService(token, followUserId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editUserDetailsHandler = createAsyncThunk(
  "/users/editUser",
  async ({ token, userData }, { rejectWithValue }) => {
    try {
      const data = await editUserDetailService(token, userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    makeSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersHandler.fulfilled, (state, action) => {
        state.allUsers = action.payload;
      })
      .addCase(getSingleUserHandler.fulfilled, (state, action) => {
        state.userDetails = action.payload;
      })
      .addCase(followUserHandler.fulfilled, (state, action) => {
        const { user, followUser } = action.payload;
        state.allUsers = state.allUsers.map((stateUser) =>
          stateUser.username === user.username
            ? { ...user }
            : stateUser.username === followUser.username
            ? { ...followUser }
            : stateUser
        );
      })
      .addCase(unFollowUserHandler.fulfilled, (state, action) => {
        const { user, followUser } = action.payload;
        state.allUsers = state.allUsers.map((stateUser) =>
          stateUser.username === user.username
            ? { ...user }
            : stateUser.username === followUser.username
            ? { ...followUser }
            : stateUser
        );
      })
      .addCase(editUserDetailsHandler.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.allUsers = state.allUsers.map((stateUser) =>
          stateUser.username === user.username ? { ...user } : stateUser
        );
      });
  },
});

export const userReducer = userSlice.reducer;
export const { makeSuggestions } = userSlice.actions;
