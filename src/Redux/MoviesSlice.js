import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllMovies = createAsyncThunk("movies/fetchAll", async () => {
  try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_TMDB_POPULAR_MOVIES_URL,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
          },
        }
      );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
