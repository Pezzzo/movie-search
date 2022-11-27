import React, { useEffect, useState } from 'react';
import { useSelectors } from '../../hooks/useSelectors';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImgModal } from './img-modal';
import { openModalHandler, setImgSlidesCount } from '../../handlers/handlers';

const Stills = () => {

  const [modalActive, setModalActive] = useState(false);
  const [resolution, setResolution] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const { stillsList } = useSelectors();

  useEffect(() => {
    setImgSlidesCount(setResolution, true, false);
  }, [resolution])

  return stillsList.length >= 1 ? (
    <div className="stills">
      <h2>Кадры из фильма</h2>
      <Swiper
        className="swiper swiper__wrapper"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={ resolution ? 3 : 1}
        initialSlide={2}
        pagination={{
          type: "progressbar",
        }}
        centeredSlides={true}
        loop
        navigation
      >
        {stillsList.map(({ imageUrl }, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide swiper-slide--stills"
            onClick={() => openModalHandler(setModalActive(true))}>
            <img
              onClick={() => setImgSrc(imageUrl)}
              className="stills__item-img"
              src={imageUrl} alt="movie" />
          </SwiperSlide>
        ))}
      </Swiper>
      {modalActive ? <ImgModal setActive={setModalActive} src={imgSrc} /> : ''}
    </div>
  ) : '';
}
export { Stills };
