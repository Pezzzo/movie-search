import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getMovieSearch } from '../../store/reducers/input-search-reducer';

const SearchByTitle = () => {

  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const formHandler = (evt) => {
    evt.preventDefault();
    dispatch(getMovieSearch(value))
  };

  const redirectToSearchPage = () => {
    if (value) {
      navigate(`/search=${value}`);
    }
  };

  return (
    <form className="form" onSubmit={formHandler}>
      <input className="form__input" type="text" name="movie" placeholder="Поиск по названию" onChange={(evt) => setValue(evt.target.value)} />
      <button className="form__button-submit" type="submit" onClick={redirectToSearchPage}>найти</button>
    </form>
  );
}

export { SearchByTitle };
