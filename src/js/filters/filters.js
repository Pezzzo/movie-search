const filtersContainer = document.querySelector('.filters');
const filters = document.querySelectorAll('.filters__link');
const filtersForm = document.querySelector('.filters__form');

// установка активного фильтра в истории
const setFilters = () => {
  const URL_PART_POPULAR_FILMS = '100';
  const URL_PART_TOP250 = '250';
  const URL_PART_SEARCH_BY_DATE = 'year';

  filters.forEach((el) => {
    el.classList.remove('filters__link--active');

    if (history.state.includes(URL_PART_POPULAR_FILMS) && el.dataset.value === URL_PART_POPULAR_FILMS ||
      history.state.includes(URL_PART_TOP250) && el.dataset.value === URL_PART_TOP250 ||
      history.state.includes(URL_PART_SEARCH_BY_DATE) && el.dataset.value === URL_PART_SEARCH_BY_DATE) {
      el.classList.toggle('filters__link--active');
    }
  });
};

// установка активного фильтра при отрисовке
const switchFilters = () => {

  document.addEventListener('click', (evt) => {
    const form = evt.target.closest('.filters__form');
    const link = evt.target.closest('.filters__link-date');
    const input = evt.target.closest('.form-filters__input');
    const select = evt.target.closest('.form-filters__select');

    if (!form && !link && !select && !input) {
      filtersForm.classList.add('display-none');
    }
  });

  filtersContainer.addEventListener('click', (evt) => {
    const link = evt.target.closest('.filters__link');
    const popular = evt.target.closest('.filters__link-popular');
    const top250 = evt.target.closest('.filters__link-top250');
    const linkDate = evt.target.closest('.filters__link-date');
    const button = evt.target.closest('.form-filters__button');

    evt.preventDefault();

    if (link) {
      filters.forEach((el) => {
        el.classList.remove('filters__link--active');
      });
      link.classList.add('filters__link--active');
    }

    if (linkDate) {
      filtersForm.classList.remove('display-none');
    }

    if (popular || top250 || button) {
      filtersForm.classList.add('display-none');
    }
  });
};

export { switchFilters, setFilters };
