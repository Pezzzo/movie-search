import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pageCountReducer } from "./reducers/page-count-reducer";
import { listReducer } from "./reducers/films-list-reducer";
import { requestStatusReducer } from "./reducers/request-status-reducer";
import { paginationReducer } from "./reducers/pagination-reducer";
import { movieDetailsReducer } from "./reducers/movie-details-reducer";
import { actorsListReducer } from "./reducers/actors-list-reducer";
import { stillsListReducer } from "./reducers/stills-list-reducer";
import { similarListReducer } from "./reducers/similar-films-reducer";
import { seasonsReducer } from "./reducers/seasons-reducer";
import { rangePaginationCountReducer } from "./reducers/range-counter-reducer";
import { personalityInfoReducer } from "./reducers/personality-reducer";
import { movieSearchReducer } from "./reducers/input-search-reducer";
import { emptyListReducer } from "./reducers/no-films-reducer";
import {
  persistStore,
  persistReducer ,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  request: requestStatusReducer,
  films: listReducer,
  pageCount: pageCountReducer,
  paginationCount: paginationReducer,
  movie: movieDetailsReducer,
  actors: actorsListReducer,
  stills: stillsListReducer,
  similar: similarListReducer,
  seasons: seasonsReducer,
  rangeCount: rangePaginationCountReducer,
  personalityInfo: personalityInfoReducer,
  inputValue: movieSearchReducer,
  emptyList: emptyListReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
export { store };
