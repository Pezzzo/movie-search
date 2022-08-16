import { getData } from '../fetch/fetch.js';
import { scrollUp, cleansingElement } from '../util/util.js';
import { variables } from '../variables/variables.js';
import { URLS } from '../url/url.js';
import { createMovieList } from '../create-movie-elements/create-movie-list.js';
import {
  renderActorsListPreview,
  renderActorsList,
  renderSimilarList,
  renderMovieItemStills,
  renderOneMovie,
  renderList,
  renderSearchByDateList
} from '../render-functions/render-functions.js';

const page = document.querySelector('.page__body');
const paginationList = document.querySelector('.pagination__list');
const paginationWrapper = document.querySelector('.pagination-inner-wrapper');
const preloader = document.querySelector('.preloader');
const filterInput = document.querySelector('.form-filters__input');
const filterSelect = document.querySelector('.form-filters__select');
const searchInput = document.querySelector('.form-search__input');


const renderPage = () => {
  let movieId;

  page.addEventListener('click', (evt) => {
    const link = evt.target.closest('.link-item');
    const popular = evt.target.closest('.filters__link-popular');
    const top250 = evt.target.closest('.filters__link-top250');
    const buttonSearch = evt.target.closest('.form-search__button');
    const logo = evt.target.closest('.page-header__logo');
    const buttonFilters = evt.target.closest('.form-filters__button');
    const actorsLink = evt.target.closest('.actors-preview__actor-link');

    if (logo) {
      const filters = document.querySelectorAll('.filters__link');
      filters.forEach((el) => {
        el.classList.remove('filters__link--active');
      });
      document.querySelector('.filters__link-popular').classList.add('filters__link--active');
    }

    if (logo || popular) {
      evt.preventDefault();
      variables.popularMovie = true;
      cleansingElement(paginationList);
      variables.pageCounter = 1;
      renderList(variables.pageCounter);
    }

    if (top250) {
      evt.preventDefault();
      variables.top250 = true;
      cleansingElement(paginationList);
      variables.pageCounter = 1;
      renderList(variables.pageCounter);
    }

    if (buttonSearch) {
      evt.preventDefault();
      variables.keywordSearch = true;
      renderList(searchInput.value);
    }
    if (buttonFilters) {
      evt.preventDefault();
      variables.dateMovie = true;
      renderSearchByDateList(filterInput.value, filterSelect.value);
    }

    if (link) {
      movieId = link.dataset.moviesId;
      variables.oneMovie = true;
      renderOneMovie(link.dataset.moviesId);
      renderActorsListPreview(link.dataset.moviesId);
      renderMovieItemStills(link.dataset.moviesId);
      renderSimilarList(link.dataset.moviesId);
    }

    if (actorsLink) {
      evt.preventDefault();
      renderActorsList(movieId);
    }
  });
};

// выбор нормера страницы и её отрисовка (в пагинации)
const selectAndRenderPage = () => {

  paginationWrapper.addEventListener('click', (evt) => {
    const URL_PART_POPULAR_FILMS = 'POPULAR';
    const URL_PART_TOP250 = '250';

    let onePage = false;

    const pageLink = evt.target.closest('.pagination__link');
    const pageLinkActive = evt.target.closest('.pagination__link--active');
    const paginationLinks = document.querySelectorAll('.pagination__link');

    if (!pageLinkActive) {
      onePage = true;
    }

    if (onePage) {
      paginationLinks.forEach((el) => {
        el.classList.remove('pagination__link--active');
      });

      pageLink.classList.toggle('pagination__link--active');

      if (pageLink) {
        variables.pageCounter = pageLink.textContent;
      }

      if (variables.stateUrl.includes(URL_PART_POPULAR_FILMS) || history.state.includes(URL_PART_POPULAR_FILMS)) {
        variables.stateUrl = `${URLS.popularFilms}${variables.pageCounter}`;
      }
      if (variables.stateUrl.includes(URL_PART_TOP250) || history.state.includes(URL_PART_TOP250)) {
        variables.stateUrl = `${URLS.top250}${variables.pageCounter}`;
      }

      preloader.classList.remove('done');
      getData(variables.stateUrl).then(data => {
        createMovieList(data.films);
        scrollUp();
      });
      history.pushState(`${variables.stateUrl}`, '', ``);
    }
    onePage = false;
  });
};

export { selectAndRenderPage, renderPage }
