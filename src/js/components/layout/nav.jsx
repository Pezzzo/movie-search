import React from 'react';
import { Link } from 'react-router-dom';
import { navLinkHandler } from '../../handlers/handlers';

const Nav = ({visible}) => {

  return (
    <nav className={visible ? "page-nav" : "page-nav page-nav--active"}>
      <ul className="page-nav__list">
        <li className="page-nav__item">
          <Link
            onClick={navLinkHandler}
            className="page-nav__link page-nav__link-home" dada-nav="" to='/'>
            Ожидаемые
          </Link>
        </li>
        <li className="page-nav__item">
          <Link
            onClick={navLinkHandler}
            className="page-nav__link page-nav__link-popular" dada-nav="popular" to={`/popular=${1}`}>
            Популярные
          </Link>
        </li>
        <li className="page-nav__item">
          <Link
            onClick={navLinkHandler}
            className="page-nav__link page-nav__link-top250" dada-nav="top250" to={`/top250=${1}`}>
            ТОП-250
          </Link>
        </li>
        <li className="page-nav__item">
        </li>
      </ul>
    </nav>
  );
}

export { Nav };
