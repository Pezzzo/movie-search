import React from 'react';
import { Link } from 'react-router-dom';
import { useSelectors } from '../../hooks/useSelectors';

const ActorsPreview = () => {

  const { actorsList, id } = useSelectors();

  const staff = [];

  for (let i = 0; i < actorsList.length; i++) {
    if (staff.length <= 9) {
      staff.push(actorsList[i]);
    }
  }

  return (
    <div className="actors-preview">
      <h2>Создатели, актёры:</h2>
      <ul className="actors-preview__list">
        {staff.map((item, index) => (
          <li
            className="actors-preview__item"
            key={index}>
            <p className="actors-preview__actor">{item.nameRu}</p>
          </li>
        ))}
      </ul>
      <Link className="actors-preview__actor-link" to={`/movie=${id}=actors`}>Показать ещё</Link>
    </div>
  );
}

export { ActorsPreview };
