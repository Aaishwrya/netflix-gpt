import {  createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movieList: null,
    mainTrailer: null,
  },
  reducers: {
    addMovies: (state, action) => {
       state.movieList = action.payload;
    },

    addMainTrailer: (state, action) => {
       state.mainTrailer = action.payload;
    },
  },
});

export const { addMovies, addMainTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;
