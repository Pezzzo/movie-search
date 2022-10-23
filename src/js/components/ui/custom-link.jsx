import React from 'react';
import { Link, useMatch } from 'react-router-dom';


const CustomLink = ({ children, to }) => {

  const match = useMatch(to);

  return (
    <>
      <Link
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
export { CustomLink };
