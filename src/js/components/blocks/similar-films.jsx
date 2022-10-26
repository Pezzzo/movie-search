import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelectors } from '../../hooks/useSelectors';
import { getMovieId } from '../../store/reducers/movie-details-reducer';
import { MovieLink } from '../ui/movie-link';

const SimilarFilms = () => {

  const dispatch = useDispatch();
  const { similarList } = useSelectors();

  return (
    <div className="similar">
      <h2>Похожие фильмы</h2>
      <ul className="similar__list">
        {similarList.map(({ nameRu, filmId, posterUrlPreview }, index) => (
          <li
          className="similar__item"
          key={index}
          onClick={() => dispatch(getMovieId(filmId))}>
            <MovieLink
            className="similar__link link-item"
            data-movies-id={filmId}
            to={`/movie=${filmId}`}>
              <img className="similar__item-img" src={posterUrlPreview} width="140" height="210" alt="movie" />
            </MovieLink>
            <p className="similar__title">{nameRu}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { SimilarFilms };
