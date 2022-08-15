import { cleansingElement } from '../util/util.js';

const moviesContainer = document.querySelector('.movies-catalog');

const createMovieList = (data) => {
  cleansingElement(moviesContainer);

  moviesContainer.insertAdjacentHTML('beforeend', `
  <ul class="movies-catalog__list">
  ${data.map(({ year,nameRu, filmId, posterUrlPreview, rating }) => `
  <li class="movies-catalog__item">
    <p class="movies-catalog__item-rating">${rating}</p>
    <a class="movies-catalog__link link-item" data-movies-id="${filmId}">
    <img class="movies-catalog__item-img" id="movie" src="${posterUrlPreview}" width="280" height="420" alt="movie">
    <h3 class="movies-catalog__title">${nameRu}</h3>
    <p class="movies-catalog__date">${year}</p>
    </a>
  </li>
`).join('')}
</ul>`
  );
};

export { createMovieList };
