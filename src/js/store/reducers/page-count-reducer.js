import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  data: 0,
};

export const getPageCount = createAction('PAGE_COUNT');

const pageCountReducer = createReducer(initialState, {
  [getPageCount]: (state, action) => {
   state.data = action.payload
  },
});

export {pageCountReducer}
