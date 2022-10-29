import React from 'react';
import { Link } from 'react-router-dom';
import { useSelectors } from '../../hooks/useSelectors';

const ActorsPreview = () => {

  const { actorsList, id } = useSelectors();

  const staffArr = [];

  for (let i = 0; i < actorsList.length; i++) {
    if (staffArr.length <= 9) {
      staffArr.push(actorsList[i]);
    }
  }

  return (
    <div className="actors-preview">
      <h2>Создатели, актёры:</h2>
      <ul className="actors-preview__list">
        {staffArr.map(({ nameRu, posterUrl, professionText, staffId }, index) => (
          <li
            className="actors-preview__item"
            key={index}>
            <Link
              className="actors-preview__actor"
              to={`/personality=${staffId}`}>
              <span>{nameRu}</span>
              <div className="actors-preview__info-wrapper">
                <img
                  className="actors-preview__item-img"
                  src={posterUrl} width="60"
                  alt="movie" />
                <p className="actors__character">{professionText.slice(0, -1)}</p>
              </div>

            </Link>
          </li>
        ))}
      </ul>
      <Link
        className="actors-preview__actor-link"
        to={`/movie=${id}=actors`}>
        Показать ещё
      </Link>
    </div>
  );
}

export { ActorsPreview };
