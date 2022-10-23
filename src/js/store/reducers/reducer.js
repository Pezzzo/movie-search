import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const getTop250 = createAction('top250');

const top250Reducer = createReducer(initialState, {
  [getTop250]: (state, action) => {
   state.data = action.payload
  },
});

export {top250Reducer}
