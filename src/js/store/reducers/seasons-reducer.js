import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  seasons: '',
};

export const getSeasonsCount = createAction('SEASONS');

const seasonsReducer = createReducer(initialState, {
  [getSeasonsCount]: (state, action) => {
    state.seasons = action.payload
  },
});

export { seasonsReducer }
