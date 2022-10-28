// const API_KEY = '8016fba8-eb34-412d-831d-71e9316c1569';
// const API_KEY = 'af7c9b5d-d938-441b-90e6-5e21ab4f4433';
const API_KEY = '602dd412-6dcf-4106-b093-de836da7aaf6';
// const API_KEY = '2dcf472a-21e6-4742-b902-5796a587e6dd';

import axios from 'axios';
import { getFilmsList } from '../store/reducers/films-list-reducer';
import { getPageCount } from '../store/reducers/page-count-reducer';
import { fetch, fetchError, fetchSuccess } from '../store/reducers/request-status-reducer';
import { getMovieDetails, getMovieCountries, getMovieGenres } from '../store/reducers/movie-details-reducer';
import { getActorsList } from '../store/reducers/actors-list-reducer';
import { getStillsList } from '../store/reducers/stills-list-reducer';
import { getSimilarList } from '../store/reducers/similar-films-reducer';
import { getSeasonsCount } from '../store/reducers/seasons-reducer';
import { getPersonalityInfo, getPersonalityInfoFacts, getPersonalityInfoFilms } from '../store/reducers/personality-reducer';
import { requestOptions } from '../util/util';

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

const getPersonality = (url) => {

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

      dispatch(getPersonalityInfo(response.data));
      dispatch(getPersonalityInfoFacts(response.data.facts));
      dispatch(getPersonalityInfoFilms(response.data.films));
      dispatch(fetchSuccess());

    } catch (e) {
      console.log(e);
      dispatch(fetchError(e.message));
    }
  };
};

const getMovieData = (url1, url2, url3, url4, url5) => {
  return async (dispatch) => {
    try {
      dispatch(fetch());

      const getMovie = () => axios(requestOptions(url1, API_KEY));
      const getActors = () => axios(requestOptions(url2, API_KEY));
      const getSimilar = () => axios(requestOptions(url3, API_KEY));
      const getStills = () => axios(requestOptions(url4, API_KEY));
      const getSeasons = () => axios(requestOptions(url5, API_KEY));

      const [movie, actors, similar, stills, seasons] = await axios.all([
        getMovie(),
        getActors(),
        getSimilar(),
        getStills(),
        getSeasons(),
      ]);

      dispatch(getMovieDetails(movie.data));
      dispatch(getMovieCountries(movie.data.countries));
      dispatch(getMovieGenres(movie.data.genres));
      dispatch(getActorsList(actors.data));
      dispatch(getSimilarList(similar.data.items));
      dispatch(getStillsList(stills.data.items));
      dispatch(getSeasonsCount(seasons.data));
      dispatch(fetchSuccess());
    }
    catch (e) {
      console.log(e);
      dispatch(fetchError(e.message));
    }
  }
};

export { getFilms, getPersonality, getMovieData };
