import React from 'react';
import { useDispatch } from 'react-redux';
import { getMovieId } from '../../store/reducers/movie-details-reducer';
import { MovieLink } from '../ui/movie-link';

const FilmsList = ({ data }) => {

  const dispatch = useDispatch();

  const getRating = (rating) => {
    if (rating === null) return;
    if (!isNaN(Number(rating))) {
      return <p className="movies-catalog__rating">{rating}</p>;
    }
    return;
  };

  return (
    <>
      <section className="movies-catalog">
        <ul className="movies-catalog__list">
          {data.map(({ rating, filmId, posterUrlPreview, nameRu, year }) => (
            <li
              className="movies-catalog__item"
              key={filmId}
              onClick={() => dispatch(getMovieId(filmId))}>
              {getRating(rating)}
              <MovieLink
                to={`/movie=${filmId}`}>
                <img className="movies-catalog__img" id="movie" src={posterUrlPreview} width="280" height="420" alt="movie" />
                <h3 className="movies-catalog__title">{nameRu}</h3>
                <p className="movies-catalog__date">{year}</p>
              </MovieLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export { FilmsList };
