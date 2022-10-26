import React, { useState } from 'react';
import { useSelectors } from '../../hooks/useSelectors';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImgModal } from './img-modal';
import { openModal } from '../../util/util';

const Stills = () => {

  const [modalActive, setModalActive] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const { stillsList } = useSelectors();

  return (
    <div className="stills">
      <h2>Кадры из фильма</h2>
      <Swiper
        className="swiper swiper__wrapper"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={true}
        loop
        navigation
      >
        {stillsList.map(({ imageUrl }, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide swiper-slide--stills"
            onClick={() => openModal(setModalActive)}>
            <img
            onClick={() => setImgSrc(imageUrl)}
            className="stills__item-img"
            src={imageUrl} alt="movie" />
          </SwiperSlide>
        ))}
      </Swiper>
      {modalActive ? <ImgModal setActive={setModalActive} src={imgSrc}/> : ''}
    </div>
  );
}
export { Stills };
