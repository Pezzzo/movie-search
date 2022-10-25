import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFilms } from '../../fetch/fetch';
import { useSelectors } from '../../hooks/useSelectors';
import { URLS } from '../../url/url';
import { Preloader } from '../blocks/preloader';
import { SwiperList } from '../blocks/swiper';

const HomePage = () => {

  // const { filmsList, loading } = useSelectors();
  const dispatch = useDispatch();



  // useEffect(() => {
  //   dispatch(getFilms(URLS.awaitFilms));
  // }, []);

  return  (
    <main className="page-main outer-wrapper">
      {/* <SwiperList films={filmsList}/> */}
    </main>
  );
}
export { HomePage };
