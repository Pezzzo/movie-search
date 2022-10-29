import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  films: [],
};

export const getFilmsList = createAction('LIST');

const listReducer = createReducer(initialState, {
  [getFilmsList]: (state, action) => {
    state.films = action.payload
  },
});

export { listReducer }
