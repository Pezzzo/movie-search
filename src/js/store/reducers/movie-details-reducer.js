import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  id: '',
  details: '',
  countries: [],
  genres: []
};

export const getMovieId = createAction('MOVIE_ID');
export const getMovieDetails = createAction('MOVIE_DETAILS');
export const getMovieCountries = createAction('MOVIE_COUNTRIES');
export const getMovieGenres = createAction('MOVIE_GENRES');

const movieDetailsReducer = createReducer(initialState, {
  [getMovieId]: (state, action) => {
    state.id = action.payload
  },
  [getMovieDetails]: (state, action) => {
    state.details = action.payload
  },
  [getMovieCountries]: (state, action) => {
    state.countries = action.payload
  },
  [getMovieGenres]: (state, action) => {
    state.genres = action.payload
  },
});

export { movieDetailsReducer }
