import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieData } from '../../fetch/fetch';
import { useSelectors } from '../../hooks/useSelectors';
import { URLS } from '../../url/url';
import { Movie } from '../blocks/movie';
import { Preloader } from '../blocks/preloader';
import { SimilarFilms } from '../blocks/similar-films';
import { Stills } from '../blocks/stills';

const MoviePage = () => {

  const dispatch = useDispatch();
  const { loading } = useSelectors();
  const params = useParams();

  useEffect(() => {
    dispatch(getMovieData(
      `${URLS.filmId}${params.id}`,
      `${URLS.actors}${params.id}`,
      `${URLS.similarFilms}${params.id}/similars`,
      `${URLS.filmStills}${params.id}/images?type=STILL&page=1`,
      `${URLS.seasons}${params.id}/seasons`
    ));
  }, [params.id]);

  return loading ? <Preloader /> : (
    <main className="page-main outer-wrapper">
      <div className="inner-wrapper">
        <Movie />
        <Stills />
        <SimilarFilms />
      </div>
    </main>
  );
}

export { MoviePage };
