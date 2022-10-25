import React from 'react';
import { useSelectors } from '../../hooks/useSelectors';

const ActorsPreview = () => {

  const { actorsList } = useSelectors();

  const staff = [];

  for (let i = 0; i < actorsList.length; i++) {
    if (staff.length <= 9) {
      staff.push(actorsList[i]);
    }
  }

  return (
    <div className="actors-preview">
      <h2>Создатели, актёры:</h2>
      {staff.map((item) => (
        <li key={item.staffId}>
          <p className="actors-preview__actor">{item.nameRu}</p>
        </li>
      ))}
      <a className="actors-preview__actor-link" href="#">Показать ещё</a>
    </div>
  );
}

export { ActorsPreview };
