import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pageCountReducer } from "./reducers/page-count-reducer";
import {top250Reducer} from "./reducers/reducer";

const rootReducer = combineReducers({
  top250: top250Reducer,
  pageCount: pageCountReducer
});


export const store = configureStore({
  reducer: rootReducer,
});
