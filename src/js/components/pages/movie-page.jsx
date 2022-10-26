import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getActors, getMovie, getSeasons, getSimilar, getStills } from '../../fetch/fetch';
import { useSelectors } from '../../hooks/useSelectors';
import { URLS } from '../../url/url';
import { Movie } from '../blocks/movie';
import { Preloader } from '../blocks/preloader';
import { SimilarFilms } from '../blocks/similar-films';
import { Stills } from '../blocks/stills';

const MoviePage = () => {

  const dispatch = useDispatch();
  const { loading, details } = useSelectors();
  const params = useParams();

// console.log(details)
  useEffect(() => {
    dispatch(getMovie(`${URLS.filmId}${params.id}`));
    dispatch(getStills(`${URLS.filmStills}${params.id}/images?type=STILL&page=1`));
    dispatch(getActors(`${URLS.actors}${params.id}`));
    dispatch(getSimilar(`${URLS.similarFilms}${params.id}/similars`));
    dispatch(getSeasons(`${URLS.seasons}${params.id}/seasons`));
  }, [params.id]);

  return loading ? <Preloader /> : (
    <main className="page-main outer-wrapper">
      <div className="inner-wrapper">
        <section className="movies-catalog">
          <Movie/>
          <Stills />
          <SimilarFilms />
        </section>
      </div>
    </main>
  );
}

export { MoviePage };
