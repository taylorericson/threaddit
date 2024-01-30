import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubreddits = createAsyncThunk(
  "subreddits/fetchSubreddits",
  async () => {
    const response = await fetch("https://www.reddit.com/subreddits.json");
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
  }
);

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [],
    isLoading: true,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSubreddits.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(fetchSubreddits.fulfilled, (state, action) => {
      state.subreddits = action.payload;
      state.isLoading = false;
      state.hasError = false;
    });
    builder.addCase(fetchSubreddits.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export const selectSubreddits = (state) => state.subreddits.subreddits;
export default subredditsSlice.reducer;
