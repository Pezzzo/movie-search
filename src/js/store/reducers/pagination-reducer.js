import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  number: 1,
};

export const setNumberPage = createAction('COUNT');

const paginationReducer = createReducer(initialState, {
  [setNumberPage]: (state, action) => {
    state.number = action.payload
  },
});

export { paginationReducer }
