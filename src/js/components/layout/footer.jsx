import React from 'react';
import '../../../img/icon-github.png';

const Footer = () => {
  return (
    <>
      <footer className="page-footer">
        <a className="page-footer__link-kinopoisk" href="https://kinopoiskapiunofficial.tech/" target="_blank" rel="noopener noreferrer">Kinopoisk Api
          Unofficial</a>
        <a className="page-footer__link-author" href="https://github.com/Pezzzo" target="_blank" rel="noopener noreferrer">
          <span className="page-footer__author">Pezzzo</span> <img className="page-footer__github-logo"
            src="img/icon-github.png" width="30" height="30" alt="" />
        </a>
      </footer>
    </>
  );
}

export { Footer };
