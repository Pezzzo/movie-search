import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  data: 1,
};

export const getPageCount = createAction('PAGE_COUNT');

const pageCountReducer = createReducer(initialState, {
  [getPageCount]: (state, action) => {
   state.data = action.payload
  },
});

export {pageCountReducer}
