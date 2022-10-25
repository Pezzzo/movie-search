import React from 'react';

const Actors = ({ actors }) => {

  return (
    <div className="actors ">
      <h2>Создатели:</h2>
      <ul className="actors__list">
        {actors.map(({ posterUrl, nameRu, nameEn, description, professionText }, index) => (
          <li className="actors__item" key={index}>
            <img className="actors__item-img" src={posterUrl} width="60" alt="movie" />
            <div className="actors__names-wrapper">
              <p className="actors__name">{nameRu} / {nameEn}</p>
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
