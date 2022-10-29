import React from 'react';
import { Link } from 'react-router-dom';

const Actors = ({ actors }) => {
  return (
    <div className="actors ">
      <h2>Создатели:</h2>
      <ul className="actors__list">
        {actors.map(({ posterUrl, nameRu, nameEn, description, professionText, staffId }, index) => (
          <li className="actors__item" key={index}>
            <Link to={`/personality=${staffId}`}>
              <img className="actors__item-img" src={posterUrl} width="60" alt="movie" />
            </Link>
            <div className="actors__names-wrapper">
              <Link className="actors__name" to={`/personality=${staffId}`}>
                {nameRu} / {nameEn}
              </Link>
              <p className="actors__character">{professionText.slice(0, -1)}</p>
              <p className="actors__character">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Actors };
