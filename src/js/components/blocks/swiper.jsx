import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
          className="swiper-slide">
          <div className="swiper__wrapper">
            <img className="swiper__item-img" id="movie" src={posterUrl} width="450" alt="movie" />
            <div className="swiper__descroption">
              <h3 className="swiper__title">{nameRu}</h3>
              <p className="swiper__date">{year}</p>
              <p>{countries.map(({ country }) => country).join(', ')}</p>
              <p>{genres.map(({ genre }) => genre).join(', ')}</p>
              <div className="swiper__">
                <p>{rating}</p>
                <p>Рейтинг ожидания</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export { SwiperList };
