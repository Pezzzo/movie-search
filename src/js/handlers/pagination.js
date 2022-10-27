import { getArrRenderedPaginationLinks } from "../util/util";

const PAGINATION_LIST_STEP = -255;
const BUTTONS_PAGINATION_PAGE = 5;
let rangeCounter = 0;

// навигация по пагинации
const setPaginationRange = (arrLength, pageNumber) => {

  let currentPaginationPosition = 255;
  let arrElementsIndices = [];

  for (let i = 0; i < arrLength; i++) {
    arrElementsIndices.push(String(i));
  }

  for (let i = 0; i < arrElementsIndices.length; i++) {
    if (!getArrRenderedPaginationLinks(arrElementsIndices, BUTTONS_PAGINATION_PAGE, i).includes(pageNumber)) {
      currentPaginationPosition += PAGINATION_LIST_STEP;
    }
    if (getArrRenderedPaginationLinks(arrElementsIndices, BUTTONS_PAGINATION_PAGE, i).includes(pageNumber)) {
      rangeCounter = currentPaginationPosition;
      return rangeCounter;
    }
  }
};

// включение и отключение стрелок
const setStateArrows = () => {
  const PAGINATION_LIST_WIDTH = 255;
  const paginationWrapper = document.querySelector('.pagination-wrapper');
  const paginationList = document.querySelector('.pagination__list');
  const buttonPrev = document.querySelector('.pagination__button-prev');
  const buttonNext = document.querySelector('.pagination__button-next');
  const buttonStart = document.querySelector('.pagination__button-start');
  const buttonEnd = document.querySelector('.pagination__button-end');


  if (paginationList.style.marginLeft === '0px') {
    buttonPrev.setAttribute('disabled', 'disabled');
    buttonStart.setAttribute('disabled', 'disabled');
  }
  if (paginationList.style.marginLeft !== '0px') {
    buttonPrev.removeAttribute('disabled');
    buttonStart.removeAttribute('disabled');
  }
  if (paginationWrapper.offsetWidth < PAGINATION_LIST_WIDTH) {
    buttonNext.setAttribute('disabled', 'disabled');
    buttonEnd.setAttribute('disabled', 'disabled');
  }
  if (paginationWrapper.offsetWidth === PAGINATION_LIST_WIDTH) {
    buttonNext.removeAttribute('disabled');
    buttonEnd.removeAttribute('disabled');
  }
};

// состояние пагинации при навигации по ней
const setPaginationStateOnClick = () => {

  const pagination = document.querySelector('.pagination');
  const paginationList = document.querySelector('.pagination__list');

  pagination.addEventListener('click', (evt) => {

    const prev = evt.target.closest('.pagination__button-prev');
    const next = evt.target.closest('.pagination__button-next');
    const start = evt.target.closest('.pagination__button-start');
    const end = evt.target.closest('.pagination__button-end');
    const links = document.querySelectorAll('.pagination__link');

    if (start) {
      rangeCounter = 0;
      paginationList.style.marginLeft = `${rangeCounter}px`;
    }

    if (end) {
      setPaginationRange(links.length, String(links.length - 1));
      paginationList.style.marginLeft = `${rangeCounter}px`;
    }

    if (next) {
      paginationList.style.marginLeft = `${rangeCounter += PAGINATION_LIST_STEP}px`;
    }

    if (prev) {
      paginationList.style.marginLeft = `${rangeCounter -= PAGINATION_LIST_STEP}px`;
    }

    setStateArrows();
  });
};

// состояние пагинации при переходах между страницами
const setPaginationStateOnload = () => {
  const paginationList = document.querySelector('.pagination__list');
  const links = document.querySelectorAll('.pagination__link');
  const buttonPrev = document.querySelector('.pagination__button-prev');
  const buttonNext = document.querySelector('.pagination__button-next');
  const buttonStart = document.querySelector('.pagination__button-start');
  const buttonEnd = document.querySelector('.pagination__button-end');

  let arrElementsClasses = [];

  links.forEach(e => arrElementsClasses.push(e.getAttribute('class')));

  for (let i = 0; i <= arrElementsClasses.length; i++) {

    if (arrElementsClasses[i].includes('pagination__link--active')) {
      if (i <= BUTTONS_PAGINATION_PAGE) {
        buttonPrev.setAttribute('disabled', 'disabled');
        buttonStart.setAttribute('disabled', 'disabled');
      }
      if (i >= arrElementsClasses.length-1) {
        buttonNext.setAttribute('disabled', 'disabled');
        buttonEnd.setAttribute('disabled', 'disabled');
      }
    }

    if (arrElementsClasses[i].includes('pagination__link--active')) {
      let margin = Math.ceil(((i + 1) / BUTTONS_PAGINATION_PAGE) - 1);
      rangeCounter = margin * PAGINATION_LIST_STEP;
      return paginationList.style.marginLeft = `${rangeCounter}px`;
    }
  }
};

export { setPaginationStateOnClick, setPaginationStateOnload }
