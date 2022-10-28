import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  personalityInfo: [],
  personalityInfoFacts: [],
  personalityInfoFilms: [],
};

export const getPersonalityInfo = createAction('PERSONALITY');
export const getPersonalityInfoFacts = createAction('PERSONALITY_FACTS');
export const getPersonalityInfoFilms = createAction('PERSONALITY_FILMS');

const personalityInfoReducer = createReducer(initialState, {
  [getPersonalityInfo]: (state, action) => {
   state.personalityInfo = action.payload
  },
  [getPersonalityInfoFacts]: (state, action) => {
   state.personalityInfoFacts = action.payload
  },
  [getPersonalityInfoFilms]: (state, action) => {
   state.personalityInfoFilms = action.payload
  },
});

export {personalityInfoReducer}
