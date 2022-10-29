import React from 'react';
import { Preloader } from '../blocks/preloader';

const Main = ({ loading, children }) => {
  return loading ? <Preloader /> :  (
    <main className="page-main outer-wrapper">
      {children}
    </main>
  );
}

export { Main };
