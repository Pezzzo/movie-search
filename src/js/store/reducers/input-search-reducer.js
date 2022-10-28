import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  inputValue: '',
};

export const getMovieSearch = createAction('MOVIE_SEARCH');

const movieSearchReducer = createReducer(initialState, {
  [getMovieSearch]: (state, action) => {
    state.inputValue = action.payload
  },
});

export { movieSearchReducer }
