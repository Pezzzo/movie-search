const modal = document.querySelector('.modal-section');

const createMovieStillsSlides = () => {

  modal.insertAdjacentHTML('beforeend', `
  <div class="modal">
    <img class="modal-popup__img" src="" width="300" alt="still" >
    <button class="modal-popup__arrow modal-popup__arrow-back">‹</button>
    <button class="modal-popup__arrow modal-popup__arrow-forward">›</button>
    <button button class="modal-popup__close-button">×</button>
  </div>
  `);
};

export { createMovieStillsSlides };
