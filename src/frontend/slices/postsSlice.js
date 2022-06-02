import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPostsService } from "../services";
import { createNewPostService } from "../services/post-services";

const initialState = {
  posts: [],
  postLoading: true,
  postError: false,
  sortPostsBy: "LATEST",
};

export const getAllPostsHandler = createAsyncThunk(
  "/posts/allPosts",
  async (token, { rejectWithValue }) => {
    try {
      const data = await getAllPostsService(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createNewPostHandler = createAsyncThunk(
  "posts/newPost",
  async ({ postData, token }, { rejectWithValue }) => {
    console.log("slice:", postData);
    try {
      const data = await createNewPostService(postData, token);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    sortPostsHandler: (state, action) => {
      state.sortPostsBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPostsHandler.pending, (state) => {
        state.postLoading = true;
        state.postError = false;
      })
      .addCase(getAllPostsHandler.fulfilled, (state, action) => {
        state.postLoading = false;
        state.postError = false;
        state.posts = action.payload;
      })
      .addCase(getAllPostsHandler.rejected, (state) => {
        state.postLoading = false;
        state.postError = true;
      })
      .addCase(createNewPostHandler.pending, (state) => {
        state.postLoading = true;
        state.postError = false;
      })
      .addCase(createNewPostHandler.fulfilled, (state, action) => {
        state.postLoading = false;
        state.postError = false;
        state.posts = action.payload;
      })
      .addCase(createNewPostHandler.rejected, (state) => {
        state.postLoading = false;
        state.postError = true;
      });
  },
});

export const postsReducer = postsSlice.reducer;
export const { sortPostsHandler } = postsSlice.actions;
