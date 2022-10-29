import React from 'react';
import { useSelectors } from '../../hooks/useSelectors';
import { Actors } from '../blocks/actors';
import { Error } from '../blocks/error';
import { Main } from '../layout/main';

const ActorsPage = () => {

  const { actorsList, loading, error } = useSelectors();

  return error ? <Error error={error} /> : (
    <Main loading={loading}>
      <div className="inner-wrapper">
        <Actors actors={actorsList} />
      </div>
    </Main>
  );
}

export { ActorsPage };
