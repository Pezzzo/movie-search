import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  stills: [],
};

export const getStillsList = createAction('STILLS');

const stillsListReducer = createReducer(initialState, {
  [getStillsList]: (state, action) => {
    state.stills = action.payload
  },
});

export { stillsListReducer }
