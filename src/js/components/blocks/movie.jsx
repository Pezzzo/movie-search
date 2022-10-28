import React from 'react';
import { useSelectors } from '../../hooks/useSelectors';
import { ActorsPreview } from './actors-preview';

const Movie = () => {

  const { details, countries, genres, seasons } = useSelectors();

  return (
    <section className="movie">
      <div className="movie__wrapper">
        <img
          className="movie__img"
          src={details.posterUrl}
          width="280"
          height="420"
          alt="movie" />
        <div className="movie__text-wrapper">
          <h2 className="movie__title">{details.nameRu ? details.nameRu : details.nameEn}</h2>
          {seasons.total ? <p><span className="movie__text">Кол-во сезонов: </span>{seasons.total}</p> : ''}
          <p><span className="movie__text">Год:</span> {details.year}</p>
          <p><span className="movie__text">Страна:</span> {countries.map(({ country }) => country).join(', ')}</p>
          <p><span className="movie__text">Жанр:</span> {genres.map(({ genre }) => genre).join(', ')}</p>
          <p><span className="movie__text">Продолжительность:</span> {details.filmLength ? details.filmLength + ' мин.' : '...'}</p>
          <p><span className="movie__text">Кинопоиск:</span> {details.ratingKinopoisk ? details.ratingKinopoisk : '...'}</p>
          <p><span className="movie__text">IMDb:</span> {details.ratingImdb ? details.ratingImdb : '...'}</p>
          {details.description ? <p>{details.description}</p> : ''}
          <a className="movie__kinopoisk-link kinopoisk-link" href={details.webUrl} target="_blank" rel="noopener noreferrer"><span>подробнее на </span>Кинопоиск</a>
        </div>
        <ActorsPreview />
      </div>
    </section>
  );
}

export { Movie };
