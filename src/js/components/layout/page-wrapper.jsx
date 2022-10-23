import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';

const PageWrapper = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export { PageWrapper };
