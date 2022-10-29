import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  rangeCount: 0,
};

export const setRangeCount = createAction('RANGE_COUNT');

const rangePaginationCountReducer = createReducer(initialState, {
  [setRangeCount]: (state, action) => {
   state.rangeCount = action.payload
  },
});

export {rangePaginationCountReducer}
