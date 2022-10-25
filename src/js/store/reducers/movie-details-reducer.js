import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  id: 301,
  details: ''
};

export const getMovieId = createAction('MOVIE_ID');
export const getMovieDetails = createAction('MOVIE_DETAILS');

const movieDetailsReducer = createReducer(initialState, {
  [getMovieId]: (state, action) => {
    state.id = action.payload
  },
  [getMovieDetails]: (state, action) => {
    state.details = action.payload
  },
});

export { movieDetailsReducer }
