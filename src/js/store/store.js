import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pageCountReducer } from "./reducers/page-count-reducer";
import { listReducer } from "./reducers/films-list-reducer";
import { requestStatusReducer } from "./reducers/request-status-reducer";
import { paginationReducer } from "./reducers/pagination-reducer";
import { movieDetailsReducer } from "./reducers/movie-details-reducer";
import { actorsListReducer } from "./reducers/actors-list-reducer";

const rootReducer = combineReducers({
  request: requestStatusReducer,
  films: listReducer,
  pageCount: pageCountReducer,
  paginationCount: paginationReducer,
  movie: movieDetailsReducer,
  actors: actorsListReducer
});

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const state = localStorage.getItem('state');
    return state ? JSON.parse(state) : undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage()
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export {store};
