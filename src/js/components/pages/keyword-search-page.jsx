import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFilms } from '../../fetch/fetch';
import { useSelectors } from '../../hooks/useSelectors';
import { URLS } from '../../url/url';
import { Preloader } from '../blocks/preloader';
import { FilmsList } from '../blocks/films-list';

const SearchPage = () => {

  const { filmsList, loading, inputValue } = useSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms(`${URLS.keywordSearch}${inputValue}&page=1`));
  }, [inputValue]);

  return loading ? <Preloader /> : (
    <main className="page-main outer-wrapper">
      <FilmsList data={filmsList} />
    </main>
  );
}

export { SearchPage };
