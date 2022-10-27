// const API_KEY = '8016fba8-eb34-412d-831d-71e9316c1569';
// const API_KEY = 'af7c9b5d-d938-441b-90e6-5e21ab4f4433';
// const API_KEY = '602dd412-6dcf-4106-b093-de836da7aaf6';
const API_KEY = '2dcf472a-21e6-4742-b902-5796a587e6dd';

import axios from 'axios';
import { getFilmsList } from '../store/reducers/films-list-reducer';
import { getPageCount } from '../store/reducers/page-count-reducer';
import { fetch, fetchError, fetchSuccess } from '../store/reducers/request-status-reducer';
import { getMovieDetails, getMovieCountries, getMovieGenres } from '../store/reducers/movie-details-reducer';
import { getActorsList } from '../store/reducers/actors-list-reducer';
import { getStillsList } from '../store/reducers/stills-list-reducer';
import { getSimilarList } from '../store/reducers/similar-films-reducer';
import { getSeasonsCount } from '../store/reducers/seasons-reducer';

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

      dispatch(getFilmsList(response.data.films));
      dispatch(getPageCount(response.data.pagesCount));
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

      dispatch(getMovieDetails(response.data));
      dispatch(getMovieCountries(response.data.countries));
      dispatch(getMovieGenres(response.data.genres));
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

      dispatch(getActorsList(response.data));
      console.log(response.data)
      dispatch(fetchSuccess());

    } catch (e) {
      console.log(e);
      dispatch(fetchError(e.message));
    }
  };
};

const getStills = (url) => {

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

      dispatch(getStillsList(response.data.items));
      dispatch(fetchSuccess());

    } catch (e) {
      console.log(e);
      dispatch(fetchError(e.message));
    }
  };
};
const getSimilar = (url) => {

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

      dispatch(getSimilarList(response.data.items));
      dispatch(fetchSuccess());

    } catch (e) {
      console.log(e);
      dispatch(fetchError(e.message));
    }
  };
};

const getSeasons = (url) => {

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
      // console.log(response.data)
      dispatch(getSeasonsCount(response.data));
      dispatch(fetchSuccess());

    } catch (e) {
      console.log(e);
      dispatch(fetchError(e.message));
    }
  };
};

export { getFilms, getActors, getMovie, getStills, getSimilar, getSeasons };
