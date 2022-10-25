import React from 'react';

const SearchByTitle = () => {
  return (
    <form className="form">
      <input className="form__input" type="text" name="movie" placeholder="Поиск по названию" />
      <button className="form__button-submit" type="submit">найти</button>
    </form>
  );
}

export { SearchByTitle };
