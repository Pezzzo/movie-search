import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  actors: [],
};

export const getActorsList = createAction('ACTORS');

const actorsListReducer = createReducer(initialState, {
  [getActorsList]: (state, action) => {
    state.actors = action.payload
  },
});

export { actorsListReducer }
