import { variables } from '../variables/variables.js';

const pagination = document.querySelector('.pagination');
const paginationList = document.querySelector('.pagination__list');
const PAGINATION_STEP = -255;

const showAvailablePages = () => {

  pagination.addEventListener('click', (evt) => {
    evt.preventDefault();

    const prev = evt.target.closest('.pagination__button-prev');
    const next = evt.target.closest('.pagination__button-next');
    const start = evt.target.closest('.pagination__button-start');
    const end = evt.target.closest('.pagination__button-end');

    const links = document.querySelectorAll('.pagination__link');

    if (start) {
      variables.rangeCounter = 0;
      paginationList.style.marginLeft = `${variables.rangeCounter}px`;
    }

    if (end) {
      setPaginationRange(links.length, String(links.length-1));
      paginationList.style.marginLeft = `${variables.rangeCounter}px`;
    }

    if (next) {
      paginationList.style.marginLeft = `${variables.rangeCounter += PAGINATION_STEP}px`;
    }

    if (prev) {
      paginationList.style.marginLeft = `${variables.rangeCounter -= PAGINATION_STEP}px`;
    }

    setStatePaginationRange();
  });
};

// поиск и установка нужного диапазона пагинации
const getPaginationRange = (array, range, part) => {
  let start = range * (part - 1);
  let end = (range * part);
  return array.slice(start, end);
};

const setPaginationRange = (arrLength, pageNumber) => {

  const PAGINATION_NUMBERS = 5;
  let currentPaginationPosition = 255;
  let getRange = [];

  for (let i = 0; i < arrLength; i++) {
    getRange.push(String(i));
  }

  for (let i = 0; i < getRange.length; i++) {
    if (!getPaginationRange(getRange, PAGINATION_NUMBERS, i).includes(pageNumber)) {
      currentPaginationPosition += PAGINATION_STEP;
    }
    if (getPaginationRange(getRange, PAGINATION_NUMBERS, i).includes(pageNumber)) {
      variables.rangeCounter = currentPaginationPosition;
      return variables.rangeCounter;
    }
  }
};

// включение и отключение стрелок
const setStatePaginationRange = () => {
  const PAGINATION_WIDTH = 255;
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
  if (paginationWrapper.offsetWidth < PAGINATION_WIDTH) {
    buttonNext.setAttribute('disabled', 'disabled');
    buttonEnd.setAttribute('disabled', 'disabled');
  }
  if (paginationWrapper.offsetWidth === PAGINATION_WIDTH) {
    buttonNext.removeAttribute('disabled');
    buttonEnd.removeAttribute('disabled');
  }
};

export { showAvailablePages, setPaginationRange, getPaginationRange, setStatePaginationRange }
