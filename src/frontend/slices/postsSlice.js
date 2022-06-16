import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllPostsService,
  createNewPostService,
  likeAPostService,
  unlikeAPostService,
  editPostService,
  deletePostService,
} from "../services";
import { addToBookmarksService } from "../services/bookmark-services/addToBookmarksService";
import { getBookmarkedService } from "../services/bookmark-services/getBookmarkedService";
import { removeFromBookmarksService } from "../services/bookmark-services/removeFromBookmarksService";

const initialState = {
  posts: [],
  postLoading: true,
  postError: false,
  sortPostsBy: "LATEST",
  bookmarks: [],
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
    try {
      const data = await createNewPostService(postData, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editPostHandler = createAsyncThunk(
  "posts/editPost",
  async ({ token, id, postData }, { rejectWithValue }) => {
    try {
      const data = await editPostService(token, id, postData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePostHandler = createAsyncThunk(
  "post/deletepost",
  async ({ token, id }, { rejectWithValue }) => {
    try {
      const data = await deletePostService(token, id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const likeAPostHandler = createAsyncThunk(
  "posts/likePost",
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const data = await likeAPostService(id, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const unlikeAPostHandler = createAsyncThunk(
  "posts/unlikePost",
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const data = await unlikeAPostService(id, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getBookmarkedHandler = createAsyncThunk(
  "/posts/bookmarked",
  async (token, { rejectWithValue }) => {
    try {
      const data = await getBookmarkedService(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addToBookmarksHandler = createAsyncThunk(
  "posts/addToBookmarks",
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const data = await addToBookmarksService(id, token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFromBookmarksHandler = createAsyncThunk(
  "posts/removeFromBookmarks",
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const data = await removeFromBookmarksService(id, token);
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
      })
      .addCase(likeAPostHandler.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(unlikeAPostHandler.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getBookmarkedHandler.pending, (state) => {
        state.postLoading = true;
        state.postError = false;
      })
      .addCase(getBookmarkedHandler.fulfilled, (state, action) => {
        state.postLoading = false;
        state.postError = false;
        state.bookmarks = action.payload;
      })
      .addCase(getBookmarkedHandler.rejected, (state) => {
        state.postLoading = false;
        state.postError = true;
      })
      .addCase(addToBookmarksHandler.fulfilled, (state, action) => {
        state.bookmarks = action.payload;
      })
      .addCase(removeFromBookmarksHandler.fulfilled, (state, action) => {
        state.bookmarks = action.payload;
      })
      .addCase(editPostHandler.pending, (state) => {
        state.postLoading = true;
        state.postError = false;
      })
      .addCase(editPostHandler.fulfilled, (state, action) => {
        state.postLoading = false;
        state.postError = false;
        state.posts = action.payload;
      })
      .addCase(editPostHandler.rejected, (state) => {
        state.postLoading = false;
        state.postError = true;
      })
      .addCase(deletePostHandler.pending, (state) => {
        state.postLoading = true;
        state.postError = false;
      })
      .addCase(deletePostHandler.fulfilled, (state, action) => {
        state.postLoading = false;
        state.postError = false;
        state.posts = action.payload;
      })
      .addCase(deletePostHandler.rejected, (state) => {
        state.postLoading = false;
        state.postError = true;
      });
  },
});

export const postsReducer = postsSlice.reducer;
export const { sortPostsHandler } = postsSlice.actions;
