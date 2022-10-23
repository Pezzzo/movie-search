import React from 'react';
import {CustomLink} from '../ui/custom-link'

const Nav = () => {

  return (
    <nav className="page-nav">
      <ul className="page-nav__list">
        <li className="page-nav__item">
          <CustomLink className="page-nav__link--active" to='/'>
            Главная
          </CustomLink>
        </li>
        <li className="page-nav__item">
          <CustomLink to='/popular'>
            Популярное
          </CustomLink>
        </li>
        <li className="page-nav__item">
          <CustomLink to='/top250'>
            ТОП-250
          </CustomLink>
        </li>
        <li className="page-nav__item">
        </li>
      </ul>
    </nav>
  );
}
export { Nav };
