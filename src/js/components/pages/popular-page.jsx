import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFilms } from '../../fetch/fetch';
import { useSelectors } from '../../hooks/useSelectors';
import { URLS } from '../../url/url';
import { Pagination } from '../blocks/pagination';
import { FilmsList } from '../blocks/films-list';
import { useParams } from 'react-router-dom';
import { Main } from '../layout/main';
import { Error } from '../blocks/error';

const PopularPage = () => {

  const { filmsList, pageCount, loading, error } = useSelectors();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getFilms(`${URLS.popularFilms}${params.id}`));
  }, [params.id]);

  return error ? <Error error={error} /> : (
    <Main loading={loading}>
      <FilmsList data={filmsList} />
      <Pagination pageCount={pageCount} />
    </Main>
  );
}

export { PopularPage };
