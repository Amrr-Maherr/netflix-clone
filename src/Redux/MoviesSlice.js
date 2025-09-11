// Redux slice for managing movies state using Redux Toolkit

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch popular movies from TMDB API
// - Uses the URL from environment variable NEXT_PUBLIC_TMDB_POPULAR_MOVIES_URL
// - Sets Authorization header with Bearer token from NEXT_PUBLIC_TMDB_API_KEY
// - Returns data.results which contains an array of movie objects
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
    return data.results; // Store only the results array in Redux state
  } catch (error) {
    throw error; // Reject the thunk if an error occurs
  }
});

// Create movies slice with initial state and extra reducers
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    data: [], // Array to store fetched movies
    loading: false, // Boolean to indicate loading state
    error: null, // String to store any error message
  },
  reducers: {}, // No synchronous reducers defined here
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        // Set loading to true when fetch starts
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        // Store fetched movies and set loading to false
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        // Set error message and loading to false if fetch fails
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer to integrate with Redux store
export default moviesSlice.reducer;
