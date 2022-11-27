import React from 'react';
import { Link } from 'react-router-dom';

const MovieLink = ({ children, to }) => {

  return (
    <>
      <Link
        to={to}
        className="swiper__link movie-link">
        {children}
      </Link>
    </>
  );
}

export { MovieLink };
