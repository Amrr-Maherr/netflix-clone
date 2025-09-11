import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../Redux/MoviesSlice";
const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;