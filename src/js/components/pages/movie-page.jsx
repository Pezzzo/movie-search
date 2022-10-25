import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getActors, getMovie } from '../../fetch/fetch';
import { useSelectors } from '../../hooks/useSelectors';
import { URLS } from '../../url/url';
import { ActorsPreview } from '../blocks/actors-preview';
import { Preloader } from '../blocks/preloader';

const MoviePage = () => {

  const dispatch = useDispatch();
  const { details, loading } = useSelectors();
  const params = useParams();


  useEffect(() => {
    dispatch(getActors(`${URLS.actors}${params.id}`));
    dispatch(getMovie(`${URLS.filmId}${params.id}`));
  }, [params.id]);

  return loading ? <Preloader /> : (
    <main className="page-main outer-wrapper">
      <div className="inner-wrapper">
        <section className="movies-catalog">
          <div className="movies-catalog__item-selected">
            <img
              className="movies-catalog__item-img-selected"
              src={details.posterUrl}
              width="280"
              height="420"
              alt="movie" />
            <div className="movies-catalog__item-text-wrapper">
              <h2 className="movies-catalog__item-title">{details.nameRu ? details.nameRu : details.nameEn}</h2>
              <p><span className="movies-catalog__item-text">Год:</span> {details.year}</p>
              <p><span className="movies-catalog__item-text">Страна:</span> {details.countries.map(({ country }) => country).join(', ')}</p>
              <p><span className="movies-catalog__item-text">Жанр:</span> {details.genres.map(({ genre }) => genre).join(', ')}</p>
              <p><span className="movies-catalog__item-text">Продолжительность:</span> {details.filmLength ? details.filmLength + ' мин.' : '...'}</p>
              <p><span className="movies-catalog__item-text">Кинопоиск:</span> {details.ratingKinopoisk ? details.ratingKinopoisk : '...'}</p>
              <p><span className="movies-catalog__item-text">IMDb:</span> {details.ratingImdb ? details.ratingImdb : '...'}</p>
              <p>{details.description ? details.description : ''}</p>
              <a className="movies-catalog__item-kinopoisk-link" href="${data.webUrl}" target="_blank"><span>подробнее на </span>Кинопоиск</a>
            </div>
            <ActorsPreview/>

            {/* <div className="actors-preview">
              <h2>Создатели, актёры:</h2>
              <ul className="actors-preview__list">
                ${data.map(({ nameRu }) => `
        <li class="actors-preview__item">
        <p class="actors-preview__actor">${nameRu}</p>
        </li>
`).join('')}
              </ul>
              <a class="actors-preview__actor-link" href="#">Показать ещё</a>
            </div> */}

          </div>
        </section>
      </div>
    </main>
  );
}

export { MoviePage };
