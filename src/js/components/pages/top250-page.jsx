import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFilms } from '../../fetch/fetch';
import { useSelectors } from '../../hooks/useSelectors';
import { URLS } from '../../url/url';
import { Pagination } from '../blocks/pagination';
import { Preloader } from '../blocks/preloader';
import { FilmsList } from '../blocks/films-list';
import { useParams } from 'react-router-dom';

const Top250Page = () => {

  const { filmsList, pageCount, loading } = useSelectors();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getFilms(`${URLS.top250}${params.id}`));
  }, [params.id]);

  return loading ? <Preloader /> : (
    <main className="page-main outer-wrapper">
      <Pagination pageCount={pageCount} />
      <FilmsList data={filmsList} />
    </main>
  );
}

export { Top250Page };
