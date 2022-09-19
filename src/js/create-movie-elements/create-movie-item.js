import { cleansingElement } from '../util/util.js';

const moviesContainer = document.querySelector('.movies-catalog');

const createMovieItem = (data) => {
  cleansingElement(moviesContainer);

  moviesContainer.insertAdjacentHTML('beforeend', `
  <div class="movies-catalog__item-selected">
    <img class="movies-catalog__item-img-selected" src="${data.posterUrl}" width="280" height="420" alt="movie" data-movies-id="${data.kinopoiskId}">
    <div class="movies-catalog__item-text-wrapper">
      <h2 class="movies-catalog__item-title">${data.nameRu ? data.nameRu : data.nameEn}</h2>
      <p><span class="movies-catalog__item-text">Год:</span> ${data.year}</p>
      <p><span class="movies-catalog__item-text">Страна:</span> ${data.countries.map(({ country }) => country).join(', ')}</p>
      <p><span class="movies-catalog__item-text">Жанр:</span> ${data.genres.map(({ genre }) => genre).join(', ')}</p>
      <p><span class="movies-catalog__item-text">Продолжительность:</span> ${data.filmLength ? data.filmLength + ' мин.' : '...'}</p>
      <p><span class="movies-catalog__item-text">Кинопоиск:</span> ${data.ratingKinopoisk ? data.ratingKinopoisk : '...'}</p>
      <p><span class="movies-catalog__item-text">IMDb:</span> ${data.ratingImdb ? data.ratingImdb : '...'}</p>
      <p>${data.description ? data.description : ''}</p>
      <a class="movies-catalog__item-kinopoisk-link" href="${data.webUrl}" target="_blank"><span>подробнее на </span>Кинопоиск</a>
    </div>
  </div>
  `);
};

const createSeasonsNumber = (data) => {
  const num = document.querySelector('.movies-catalog__item-text');
  num.insertAdjacentHTML('beforebegin', `
  <p><span class="movies-catalog__item-text">Кол-во сезонов:</span> ${data}</p>
  `);
};


const createMovieItemStaffPreview = (data) => {

  document.querySelector('.movies-catalog__item-selected').insertAdjacentHTML('beforeend', `
  <div class="actors-preview">
    <h2>Создатели, актёры:</h2>
      <ul class="actors-preview__list">
  ${data.map(({ nameRu }) => `
        <li class="actors-preview__item">
        <p class="actors-preview__actor">${nameRu}</p>
        </li>
`).join('')}
      </ul>
      <a class="actors-preview__actor-link" href="#">Показать ещё</a>
  </div>`
  );
};


const createMovieItemStaff = (data) => {

  cleansingElement(moviesContainer);
  moviesContainer.insertAdjacentHTML('beforeend', `
  <div class="actors">
    <h2>В ролях:</h2>
      <ul class="actors__list">
  ${data.map(({ posterUrl, nameRu, nameEn, description, professionText }) => `
        <li class="actors__item">
        <img class="actors__item-img" src="${posterUrl}" width="60"  alt="movie">
          <div class="actors__names-wrapper">
            <p class="actors__name">${nameRu} / ${nameEn}</p>
            <p class="actors__character">${professionText.slice(0, -1)}</p>
            ${description ? `<p class="actors__character">${description}` : ''}
          </div>
        </li>
`).join('')}
      </ul>
  </div>`
  );
};


const createMovieItemStills = (data) => {

  moviesContainer.insertAdjacentHTML('beforeend', `
  <div class="stills">
    <h2>Кадры из фильма</h2>
      <ul class="stills__list">
  ${data.map(({ imageUrl }) => `
        <li class="stills__item">
          <img class="stills__item-img" src="${imageUrl}" width="170" height="80" alt="movie">
        </li>
`).join('')}
      </ul>
      <h3 class="stills__item-link">Смотреть все</h3>
  </div>`
  );
};


const createMovieItemSimilars = (data) => {

  moviesContainer.insertAdjacentHTML('beforeend', `
  <div class="similar">
    <h2>Похожие фильмы</h2>
    <ul class="similar__list">
  ${data.map(({ nameRu, filmId, posterUrlPreview }) => `
      <li class="similar__item">
        <a class="similar__link link-item" data-movies-id="${filmId}">
          <img class="similar__item-img" src="${posterUrlPreview}" width="140" height="210" alt="movie">
            <p class="similar__title">${nameRu}</p>
        </a>
      </li>
`).join('')}
    </ul>
  </div>`
  );
};

export {
  createMovieItem,
  createMovieItemSimilars,
  createMovieItemStills,
  createMovieItemStaff,
  createMovieItemStaffPreview,
  createSeasonsNumber
};
