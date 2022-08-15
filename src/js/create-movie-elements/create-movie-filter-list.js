import { cleansingElement } from '../util/util.js';

const moviesContainer = document.querySelector('.movies-catalog');

//создание списка элементов
const createMovieFilterList = (data) => {
  cleansingElement(moviesContainer);

  moviesContainer.insertAdjacentHTML('beforeend', `
  <ul class="movies-catalog__list">
  ${data.map(({ year,nameRu, kinopoiskId, posterUrlPreview, premiereRu }) => `
  <li class="movies-catalog__item">
    <a class="movies-catalog__link link-item" data-movies-id="${kinopoiskId}">
    <img class="movies-catalog__item-img" id="movie" src="${posterUrlPreview}" width="280" height="420" alt="movie">
    <h3 class="movies-catalog__title">${nameRu}</h3>
    <p class="movies-catalog__date">${year}</p>
    <p class="movies-catalog__date">Премьера в россии: ${premiereRu}</p>
    </a>
  </li>
`).join('')}
</ul>`
  );
};

export { createMovieFilterList };
