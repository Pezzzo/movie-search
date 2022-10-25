import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
};

export const fetch = createAction('FETCH');
export const fetchSuccess = createAction('FETCH_SUCCESS');
export const fetchError = createAction('FETCH_ERROR');

const requestStatusReducer = createReducer(initialState, {
  [fetch]: (state) => {
    state.loading = true;
    state.error = null;
  },
  [fetchSuccess]: (state) => {
    state.loading = false;
    state.error = null;
  },
  [fetchError]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export { requestStatusReducer }
