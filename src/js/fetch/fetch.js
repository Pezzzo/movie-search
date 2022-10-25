// const API_KEY = '8016fba8-eb34-412d-831d-71e9316c1569';
// const API_KEY = 'af7c9b5d-d938-441b-90e6-5e21ab4f4433';
// const API_KEY = '602dd412-6dcf-4106-b093-de836da7aaf6';
const API_KEY = '2dcf472a-21e6-4742-b902-5796a587e6dd';

import axios from 'axios';
import { URLS } from '../url/url';
import { getFilmsList } from '../store/reducers/films-list-reducer';
import { getPageCount } from '../store/reducers/page-count-reducer';
import { fetch, fetchError, fetchSuccess } from '../store/reducers/request-status-reducer';
import { getMovieDetails } from '../store/reducers/movie-details-reducer';
import { getActorsList } from '../store/reducers/actors-list-reducer';

const getFilms = (url) => {

  return async (dispatch) => {
    try {
      dispatch(fetch());
      const response = await axios({
        method: 'get',
        url: url,
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY,
        },
      });

      if (url.includes(URLS.top250) || url.includes(URLS.popularFilms) || url.includes(URLS.keywordSearch) || url.includes(URLS.awaitFilms)) {
        dispatch(getFilmsList(response.data.films));
        dispatch(getPageCount(response.data.pagesCount));
      }
      // if (url.includes(URLS.filmId)) {
      //   dispatch(getMovieDetails(response.data));
      //   console.log(response.data)
      // }

      dispatch(fetchSuccess());

    } catch (e) {
      console.log(e);
      dispatch(fetchError(e.message));
    }
  };
};

const getMovie = (url) => {

  return async (dispatch) => {
    try {
      dispatch(fetch());
      const response = await axios({
        method: 'get',
        url: url,
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY,
        },
      });

      if (url.includes(URLS.filmId)) {
        console.log(response.data)
        dispatch(getMovieDetails(response.data));
      }
      dispatch(fetchSuccess());
    } catch (e) {
      console.log(e);
      dispatch(fetchError(e.message));
    }
  };
};


const getActors = (url) => {

  return async (dispatch) => {
    try {
      dispatch(fetch());
      const response = await axios({
        method: 'get',
        url: url,
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY,
        },
      });

      if (url.includes(URLS.actors)) {
        console.log(response.data)
        dispatch(getActorsList(response.data));
      }
      dispatch(fetchSuccess());
    } catch (e) {
      console.log(e);
      dispatch(fetchError(e.message));
    }
  };
};

export { getFilms, getActors, getMovie };
