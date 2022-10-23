import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { pagePreloader } from '../../js/page-preloader/page-preloader';
import ROUTES from '../../routes/routes';
import { PageWrapper } from '../layout/page-wrapper';
import { HomePage } from '../pages/home-page';
import { Popular } from '../pages/popular';
import { Top250 } from '../pages/top250';

const App = () => {
  // pagePreloader();
  return (
    <>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<PageWrapper />}>
            <Route index element={<HomePage />} />
            <Route path={ROUTES.POPULAR.replace(ROUTES.HOME, "")}
              element={<Popular />} />
            <Route path={ROUTES.TOP250.replace(ROUTES.HOME, "")}
              element={<Top250 />} />
            {/* <Route path={ROUTES.TOP250.replace(ROUTES.HOME, "")}
            element={<ResultsPage />}
            /> */}
          </Route>
        </Routes>
      </Router>
    </>
  )
};

export { App };
