import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MovieLink } from '../ui/movie-link';


const SwiperList = ({ films }) => {

  return (
    <Swiper
      className="swiper"
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop
      navigation
      pagination={{ clickable: true }}
    >
      {films.map(({ filmId, posterUrl, nameRu, year, countries, genres, rating }) => (
        <SwiperSlide
          key={filmId}
          className="swiper-slide swiper-slide--home">
          <div className="swiper__wrapper">
            <MovieLink
            to={`/movie=${filmId}`}>
              <img className="swiper__item-img" id="movie" src={posterUrl} width="240" height="325" alt="movie" />
              </MovieLink>
            <div className="swiper__descroption">
              <h3 className="swiper__title">{nameRu}</h3>
              <p className="swiper__date">{year}</p>
              <p className="swiper__descroption-text">{countries.map(({ country }) => country).join(', ')}</p>
              <p className="swiper__descroption-text">{genres.map(({ genre }) => genre).join(', ')}</p>
              <div className="swiper__rating-wrapper">
                <p className="swiper__rating">{rating}</p>
                <p className="swiper__rating-text">Рейтинг ожидания</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export { SwiperList };
