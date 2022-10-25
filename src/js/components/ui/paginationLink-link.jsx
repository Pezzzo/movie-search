import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const PaginationLink = ({ children, to }) => {

  const match = useMatch(to);

  return (
    <>
      <Link
        to={to}
        className={
          match ?
            'pagination__link pagination__link--active'
            :
            'pagination__link'}>
        {children}
      </Link>
    </>
  );
}

export { PaginationLink };
