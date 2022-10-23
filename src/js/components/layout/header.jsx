import React, { useState } from 'react';
import { SearchByDate } from '../blocks/search-by-date';
import { SearchByTitle } from '../blocks/search-by-title';
import { Nav } from './nav';
import '../../../img/logo.png';

const Header = () => {

  const [active, setActive] = useState('title');

  return (
    <header className="page-header">
      <a className="page-header__link" href="index.html">
        <img className="page-header__logo" src="img/logo.png" alt="логотип" />
      </a>

      <div className="page-header__forms">
        <button
          onClick={() => setActive('title')}
          className={active === 'title' ? "form__button form__button--active" : "form__button"}
          data-value="year"
          type="button">
          По названию
        </button>
        <button
          onClick={() => setActive('date')}
          className={active === 'date' ? "form__button form__button--active" : "form__button"}
          data-value="year"
          type="button">
          По дате премьеры
        </button>

        {
          active === 'title' ?
            <SearchByTitle /> : ''
        }
        {
          active === 'date' ?
            <SearchByDate /> : ''
        }
      </div>

      <Nav />
    </header>
  );
}
export { Header };
