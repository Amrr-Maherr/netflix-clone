// Redux store configuration using Redux Toolkit

import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../Redux/MoviesSlice";

// Create Redux store and combine reducers
// - 'movies' slice is managed by moviesReducer
const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

// Export the store to provide it to the React app via Redux Provider
export default store;
