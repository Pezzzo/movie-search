import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import { PageWrapper } from '../layout/page-wrapper';
import { ActorsPage } from '../pages/actors-page';
import { HomePage } from '../pages/home-page';
import { SearchPage } from '../pages/keyword-search-page';
import { MoviePage } from '../pages/movie-page';
import { PersonalityPage } from '../pages/personality-page';
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
            <Route path={ROUTES.ACTORS.replace(ROUTES.HOME, "")}
              element={<ActorsPage />} />
            <Route path={ROUTES.MOVIE.replace(ROUTES.HOME, "")}
            element={<MoviePage />} />
            <Route path={ROUTES.PERSONALITY.replace(ROUTES.HOME, "")}
            element={<PersonalityPage />} />
            <Route path={ROUTES.SEARCH.replace(ROUTES.HOME, "")}
            element={<SearchPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
};

export { App };
