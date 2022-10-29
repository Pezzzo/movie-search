import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFilms } from '../../fetch/fetch';
import { useSelectors } from '../../hooks/useSelectors';
import { URLS } from '../../url/url';
import { FilmsList } from '../blocks/films-list';
import { Main } from '../layout/main';
import { Error } from '../blocks/error';

const SearchPage = () => {

  const { filmsList, loading, error, inputValue } = useSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms(`${URLS.keywordSearch}${inputValue}&page=1`));
  }, [inputValue]);

  return error ? <Error error={error} /> : (
    <Main loading={loading}>
      <FilmsList data={filmsList} />
    </Main>
  );
}

export { SearchPage };
