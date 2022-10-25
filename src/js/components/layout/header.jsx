import React from 'react';
import { SearchByTitle } from '../blocks/search-by-title';
import { Nav } from './nav';
import '../../../img/logo.png';

const Header = () => {

  return (
    <header className="page-header">

      <div className="page-header__wrapper">
        <a className="page-header__link" href="index.html">
          <img className="page-header__logo" src="img/logo.png" alt="логотип" />
        </a>

        <Nav />

        <div className="page-header__forms">
          <SearchByTitle />
        </div>
      </div>

    </header>
  );
}

export { Header };
