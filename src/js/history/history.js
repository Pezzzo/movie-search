import { getData } from "../fetch/fetch.js";
import {
  createMovieItem,
  createMovieItemSimilars,
  createMovieItemStills,
  createMovieItemStaffPreview,
  createMovieItemStaff,
  createSeasonsNumber
} from "../create-movie-elements/create-movie-item.js";
import { createMovieList } from "../create-movie-elements/create-movie-list.js";
import { createPaginationLinks } from "../create-movie-elements/create-pagination-links.js";
import { createMovieFilterList } from "../create-movie-elements/create-movie-filter-list.js";
import { createMovieStillsSlides } from "../create-movie-elements/create-popup-img-slider.js";
import { cleansingElement } from "../util/util.js";
import { URLS } from "../url/url.js";
import { setPaginationRange, setStatePaginationRange } from "../pagination/pagination.js";
import { variables } from "../variables/variables.js";
import { popap } from "../modal/modal.js";
import { setFilters } from "../filters/filters.js";

const pagination = document.querySelector('.pagination');
const paginationList = document.querySelector('.pagination__list');
const preloader = document.querySelector('.preloader');

const getHistory = () => {

  const regExp = /page=([0-9]+)/;
  let res = regExp.exec(history.state);

  // поиск по ключевым словам (название)
  if (history.state.includes('keyword')) {
    preloader.classList.remove('done');
    getData(history.state).then(data => {
      createMovieList(data.films);

      if (data.pagesCount > 1) {
        pagination.classList.remove('display-none');
        createPaginationLinks(data);
      } else {
        pagination.classList.add('display-none');
      }
    });

    // топ 250 или популярное
  } else if (history.state.includes('top') || history.state === null) {
    preloader.classList.remove('done');
    cleansingElement(paginationList);

    getData(history.state).then(data => {
      setFilters();
      pagination.classList.remove('display-none');
      createMovieList(data.films);
      createPaginationLinks(data);
      setPaginationRange(data.pagesCount, res[1]);

      paginationList.style.marginLeft = `${variables.rangeCounter}px`;

      document.querySelectorAll('.pagination__link')[res[1] - 1].classList.add('pagination__link--active');
      setStatePaginationRange();
    });

    // по дате премьеры в Росиии
  } else if (history.state.includes('year')) {
    preloader.classList.remove('done');

    getData(history.state).then(data => {
      setFilters();
      createMovieFilterList(data.items);
    });

    // актёры
  } else if (history.state.includes('staff')) {
    getData(history.state).then(data => {
      createMovieItemStaff(data);
    });

    // подробности фильма
  } else {
    setFilters();
    preloader.classList.remove('done');

    getData(history.state).then(data => {
      pagination.classList.add('display-none');

      window.scrollTo({
        top: 0,
      });

      createMovieItem(data);
      let link = document.querySelector('.movies-catalog__item-img-selected');

      if (data.serial) {
        getData(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${data.kinopoiskId}/seasons`).then(data => {
          createSeasonsNumber(data.total);
        });
      }

      getData(`${URLS.actors}${link.dataset.moviesId}`).then(data => {
        const MAX_ACTORS_LENGTH = 9;
        pagination.classList.add('display-none');
        const actors = [];
        for (let i = 0; i < data.length; i++) {
          if (actors.length <= MAX_ACTORS_LENGTH) {
            if (data[i].professionKey === "ACTOR") {
              actors.push(data[i]);
            }
          }
        }
        createMovieItemStaffPreview(actors);
      });

      getData(`${URLS.filmStills}${link.dataset.moviesId}/images?type=STILL&page=1`).then(data => {
        pagination.classList.add('display-none');
        createMovieItemStills(data.items);
        createMovieStillsSlides();
        popap();
      });

      getData(`${URLS.similarFilms}${link.dataset.moviesId}/similars`).then(data => {
        pagination.classList.add('display-none');
        createMovieItemSimilars(data.items);
      });
    });
  }
};

export { getHistory };
