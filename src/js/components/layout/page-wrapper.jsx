import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';
import { useSelectors } from '../../hooks/useSelectors';
import { Error } from '../blocks/error';
import { setActiveClass } from '../../util/util';

const PageWrapper = () => {

  const location = useLocation();
  const { error } = useSelectors();

  useEffect(() => {
    setActiveClass(location.pathname);
  }, [location.pathname]);

  return  (
    <>
      <Header />
      {error ? <Error /> : <Outlet />}
      <Footer />
    </>
  );
}

export { PageWrapper };
