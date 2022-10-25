import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useMatch } from 'react-router-dom';
import { setNumberPage } from '../../store/reducers/pagination-reducer';

const NavigationLink = ({ children, to }) => {

  const dispatch = useDispatch();

  const match = useMatch(to);

  return (
    <>
      <Link
      onClick={() => dispatch(setNumberPage(1))}
        to={to}
        className={
          match ?
            'page-nav__link page-nav__link--active'
            :
            'page-nav__link'}>
        {children}
      </Link>
    </>
  );
}

export { NavigationLink };
