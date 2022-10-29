import React from 'react';
import { Link } from 'react-router-dom';

const MovieLink = ({ children, to }) => {

  return (
    <>
      <Link
        to={to}
        className="movies-catalog__link">
        {children}
      </Link>
    </>
  );
}

export { MovieLink };
