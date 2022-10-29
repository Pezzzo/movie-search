import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFilms } from '../../fetch/fetch';
import { useSelectors } from '../../hooks/useSelectors';
import { URLS } from '../../url/url';
import { Error } from '../blocks/error';
import { SwiperList } from '../blocks/swiper';
import { Main } from '../layout/main';

const HomePage = () => {

  const { filmsList, error, loading } = useSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms(URLS.awaitFilms));
  }, [dispatch]);

  return error ? <Error error={error} /> : (
    <Main loading={loading}>
      <div className="inner-wrapper">
        <SwiperList films={filmsList} />
      </div>
    </Main>
  );
}
export { HomePage };
