import React from 'react';
import { useSelectors } from '../../hooks/useSelectors';
import { Actors } from '../blocks/actors';
import { Preloader } from '../blocks/preloader';

const ActorsPage = () => {

  const { actorsList, loading } = useSelectors();

  return loading ? <Preloader /> : (
    <main className="page-main outer-wrapper">
      <div className="inner-wrapper">
        <Actors actors={actorsList} />
      </div>
    </main>
  );
}

export { ActorsPage };
