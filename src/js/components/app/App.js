import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { pagePreloader } from '../../js/page-preloader/page-preloader';
import ROUTES from '../../routes/routes';
import { PageWrapper } from '../layout/page-wrapper';
import { HomePage } from '../pages/home-page';
import { MoviePage } from '../pages/movie-page';
import { PopularPage } from '../pages/popular-page';
import { Top250Page } from '../pages/top250-page';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<PageWrapper />}>
            <Route index element={<HomePage />} />
            <Route path={ROUTES.POPULAR.replace(ROUTES.HOME, "")}
              element={<PopularPage />} />
            <Route path={ROUTES.TOP250.replace(ROUTES.HOME, "")}
              element={<Top250Page />} />
            <Route path={ROUTES.MOVIE.replace(ROUTES.HOME, "")}
            element={<MoviePage />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  )
};

export { App };
