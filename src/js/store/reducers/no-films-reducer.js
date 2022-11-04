import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  emptyList: false,
};

export const emptyList = createAction('EMPTY_LIST');
export const notEmptyList = createAction('NOT_EMPTY_LIST');

const emptyListReducer = createReducer(initialState, {
  [emptyList]: (state) => {
    state.emptyList = true;
  },
  [notEmptyList]: (state) => {
    state.emptyList = false;
  }
});

export { emptyListReducer }
