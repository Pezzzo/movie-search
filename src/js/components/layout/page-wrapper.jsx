import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';
import { setActiveClass } from '../../util/util';

const PageWrapper = () => {

  const location = useLocation();

  useEffect(() => {
    setActiveClass(location.pathname);
  }, [location.pathname]);

  return  (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export { PageWrapper };
