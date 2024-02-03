import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://www.reddit.com/r/home.json");
  const json = await response.json();
  json.data.children.map((post) => console.log(post.data));
  return json.data.children.map((post) => post.data);
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: true,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.hasError = false;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export const selectPosts = (state) => state.posts.posts;
export default postsSlice.reducer;
