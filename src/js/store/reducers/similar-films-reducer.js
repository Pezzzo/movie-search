import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  similar: [],
};

export const getSimilarList = createAction('SIMILAR');

const similarListReducer = createReducer(initialState, {
  [getSimilarList]: (state, action) => {
    state.similar = action.payload
  },
});

export { similarListReducer }
