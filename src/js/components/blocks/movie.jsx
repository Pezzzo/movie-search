import React from 'react';
import { useSelectors } from '../../hooks/useSelectors';
import { ActorsPreview } from './actors-preview';

const Movie = () => {

  const { details, countries, genres, seasons } = useSelectors();
  console.log(seasons)
  return (
    <div className="movies-catalog__item-selected">
      <img
        className="movies-catalog__item-img-selected"
        src={details.posterUrl}
        width="280"
        height="420"
        alt="movie" />
      <div className="movies-catalog__item-text-wrapper">
        <h2 className="movies-catalog__item-title">{details.nameRu ? details.nameRu : details.nameEn}</h2>
        {seasons.total ? <p><span className="movies-catalog__item-text">Кол-во сезонов: </span>{seasons.total}</p> : ''}
        <p><span className="movies-catalog__item-text">Год:</span> {details.year}</p>
        <p><span className="movies-catalog__item-text">Страна:</span> {countries.map(({ country }) => country).join(', ')}</p>
        <p><span className="movies-catalog__item-text">Жанр:</span> {genres.map(({ genre }) => genre).join(', ')}</p>
        <p><span className="movies-catalog__item-text">Продолжительность:</span> {details.filmLength ? details.filmLength + ' мин.' : '...'}</p>
        <p><span className="movies-catalog__item-text">Кинопоиск:</span> {details.ratingKinopoisk ? details.ratingKinopoisk : '...'}</p>
        <p><span className="movies-catalog__item-text">IMDb:</span> {details.ratingImdb ? details.ratingImdb : '...'}</p>
        {details.description ? <p>{details.description}</p> : ''}
        <a className="movies-catalog__item-kinopoisk-link" href={details.webUrl} target="_blank" rel="noopener noreferrer"><span>подробнее на </span>Кинопоиск</a>
      </div>
      <ActorsPreview />
    </div>
  );
}

export { Movie };
