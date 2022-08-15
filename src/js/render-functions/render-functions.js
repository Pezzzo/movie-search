import { getData } from "../fetch/fetch.js";
import { popap } from "../modal/modal.js";
import { URLS } from "../url/url.js";
import { cleansingElement } from "../util/util.js";
import { variables } from "../variables/variables.js";
import { createMovieStillsSlides } from "../create-movie-elements/create-popup-img-slider.js";
import { createMovieList } from "../create-movie-elements/create-movie-list.js";
import { createPaginationLinks } from "../create-movie-elements/create-pagination-links.js";
import { createMovieFilterList } from "../create-movie-elements/create-movie-filter-list.js";
import {
  createMovieItem,
  createMovieItemStaffPreview,
  createMovieItemStaff,
  createMovieItemSimilars,
  createMovieItemStills,
  createSeasonsNumber
} from "../create-movie-elements/create-movie-item.js";

const pagination = document.querySelector('.pagination');
const paginationList = document.querySelector('.pagination__list');
const buttonPrev = document.querySelector('.pagination__button-prev');
const buttonNext = document.querySelector('.pagination__button-next');
const preloader = document.querySelector('.preloader');

// отрисовка короткого списка создателей
const renderActorsListPreview = (value) => {
  preloader.classList.remove('done');
  getData(`${URLS.actors}${value}`).then(data => {
    const staff = [];
    for (let i = 0; i < data.length; i++) {
      if (staff.length <= 9) {
        staff.push(data[i]);
      }
    }
    createMovieItemStaffPreview(staff);
  });
};

// отрисовка полного списка создателей
const renderActorsList = (value) => {
  preloader.classList.remove('done');
  getData(`${URLS.actors}${value}`).then(data => {
    createMovieItemStaff(data);
  });

  history.pushState(`${URLS.actors}${value}`, '', ``);
};

// отрисовка списка похожих фильмов
const renderSimilarList = (value) => {
  preloader.classList.remove('done');
  getData(`${URLS.similarFilms}${value}/similars`).then(data => {
    createMovieItemSimilars(data.items);
  });
};

// отрисовка кадров из фильма
const renderMovieItemStills = (value) => {
  preloader.classList.remove('done');
  getData(`${URLS.filmStills}${value}/images?type=STILL&page=1`).then(data => {
    createMovieItemStills(data.items);
    createMovieStillsSlides();
    popap();
  });
};

// отрисовка подробностей фильма
const renderOneMovie = (value) => {

  preloader.classList.remove('done');
  getData(`${URLS.filmId}${value}`).then(data => {

    window.scrollTo({
      top: 0,
    });

    document.querySelectorAll('.filters__link').forEach((el) => {
      el.classList.remove('filters__link--active');
    });

    cleansingElement(paginationList);
    pagination.classList.add('display-none');
    createMovieItem(data);

    if (data.serial) {
      getData(`${URLS.seasons}${data.kinopoiskId}/seasons`).then(data => {
        createSeasonsNumber(data.total);
      });
    }

    variables.oneMovie = false;
  });

  history.pushState(`${URLS.filmId}${value}`, '', ``);
};

// отрисовка списков фильмов
const renderList = (value) => {
  preloader.classList.remove('done');

  if (variables.popularMovie) {
    variables.stateUrl = `${URLS.popularFilms}${value}`;
  } else if (variables.top250) {
    variables.stateUrl = `${URLS.top250}${value}`;
  } else if (variables.keywordSearch) {
    variables.stateUrl = `${URLS.keywordSearch}${value}`;
  }

  getData(variables.stateUrl).then(data => {
    if (variables.keywordSearch) {
      document.querySelectorAll('.filters__link').forEach((el) => {
        el.classList.remove('filters__link--active');
      });
      pagination.classList.add('display-none');
    } else {
      pagination.classList.remove('display-none');
    }

    variables.rangeCounter = 0;
    createMovieList(data.films);
    createPaginationLinks(data);

    paginationList.style.marginLeft = variables.rangeCounter;
    buttonPrev.setAttribute('disabled', 'disabled');
    buttonNext.removeAttribute('disabled');

    document.querySelector('.pagination__link').classList.add('pagination__link--active');
    variables.popularMovie = false;
    variables.keywordSearch = false;
    variables.top250 = false;
  });

  history.pushState(variables.stateUrl, '', ``);
};

// отрисовка списка фильмов по дате выхода
const renderSearchByDateList = (inputValue, selectValue) => {
  preloader.classList.remove('done');
  getData(`${URLS.searchByDate}${inputValue}&month=${selectValue}`).then(data => {
    createMovieFilterList(data.items);
    pagination.classList.add('display-none');
    document.querySelectorAll('.filters__link').forEach((el) => {
      el.classList.remove('filters__link--active');
    });
    variables.dateMovie = false;
  });

  history.pushState(`${URLS.searchByDate}${inputValue}&month=${selectValue}`, '', ``);
};

// отрисовка начальной страницы
const renderHomePage = () => {
  getData(`${URLS.popularFilms}1`).then(data => {
    createMovieList(data.films);
    createPaginationLinks(data);
    pagination.classList.remove('display-none');
    document.querySelector('.pagination__link').classList.add('pagination__link--active');
    console.log(data);
  });

  history.pushState(`${URLS.popularFilms}1`, '', ``);
};

export {
  renderActorsListPreview,
  renderActorsList,
  renderSimilarList,
  renderMovieItemStills,
  renderOneMovie,
  renderList,
  renderHomePage,
  renderSearchByDateList
}
