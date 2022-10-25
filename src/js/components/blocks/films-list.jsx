import React from 'react';
import { useDispatch } from 'react-redux';
import { getMovieId } from '../../store/reducers/movie-details-reducer';
import { MovieLink } from '../ui/movie-link';

const FilmsList = ({ data }) => {

  const dispatch = useDispatch();

  return (
    <>
      <ul className="movies-catalog__list">
        {data.map((item) => (
          <li
            className="movies-catalog__item"
            key={item.filmId}
            onClick={() => dispatch(getMovieId(item.filmId))}>
            <p className="movies-catalog__item-rating">{item.rating}</p>
            <MovieLink
              data-movies-id="${filmId}"
              to={`/movie=${item.filmId}`}>
              <img className="movies-catalog__item-img" id="movie" src={item.posterUrlPreview} width="280" height="420" alt="movie" />
              <h3 className="movies-catalog__title">{item.nameRu}</h3>
              <p className="movies-catalog__date">{item.year}</p>
            </MovieLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export { FilmsList };
