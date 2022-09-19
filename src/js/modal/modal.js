// состояние скролла
const disableScrolling = () => {
  let x = window.scrollX;
  let y = window.scrollY;
  window.onscroll = () => {
    window.scrollTo(x, y);
  };
};

const enableScrolling = () => {
  window.onscroll = () => { };
};

// переслистывание
const renderModalImg = (evt) => {
  const arrowBackEvt = evt.target.closest('.modal-popup__arrow-back');
  const arrowforwardEvt = evt.target.closest('.modal-popup__arrow-forward');
  const arrowBack = document.querySelector('.modal-popup__arrow-back');
  const arrowforward = document.querySelector('.modal-popup__arrow-forward');
  const stillsImg = document.querySelectorAll('.stills__item-img');
  const modalImg = document.querySelector('.modal-popup__img');

  if (arrowforwardEvt) {
    if (arrowBack.hasAttribute('disabled')) {
      arrowBack.removeAttribute('disabled');
    }

    if (modalImg.src === stillsImg[stillsImg.length - 2].src) {
      arrowforward.setAttribute('disabled', 'disabled');
    }

    for (let i = 0; i < stillsImg.length; i++) {
      if (stillsImg[i].src === modalImg.src) {
        modalImg.src = stillsImg[i += 1].src
      }
    }
  }

  if (arrowBackEvt) {

    if (arrowforward.hasAttribute('disabled')) {
      arrowforward.removeAttribute('disabled');
    }

    if (modalImg.src === stillsImg[1].src) {
      arrowBack.setAttribute('disabled', 'disabled');
    }

    for (let i = 1; i < stillsImg.length; i++) {
      if (stillsImg[i].src === modalImg.src) {
        modalImg.src = stillsImg[i -= 1].src
      }
    }
  }
};

// открытие попапа
const openModalHandler = (evt) => {
  const arrowBack = document.querySelector('.modal-popup__arrow-back');
  const arrowforward = document.querySelector('.modal-popup__arrow-forward');
  const stillsImg = document.querySelectorAll('.stills__item-img');
  const modalImg = document.querySelector('.modal-popup__img');
  const stillsImgTarget = evt.target.closest('.stills__item-img');
  const stillsLink = evt.target.closest('.stills__item-link');

  if (evt.target !== stillsImgTarget && evt.target !== stillsLink) {
    return;
  }

  if (evt.target === stillsLink) {
    modalImg.src = stillsImg[0].src;
  } else if (evt.target === stillsImgTarget) {
    modalImg.src = stillsImgTarget.src;
  }

  if (modalImg.src === stillsImg[0].src) {
    arrowBack.setAttribute('disabled', 'disabled');
  } else {
    arrowBack.removeAttribute('disabled');
  }

  if (modalImg.src === stillsImg[stillsImg.length - 1].src) {
    arrowforward.setAttribute('disabled', 'disabled');
  } else {
    arrowforward.removeAttribute('disabled');
  }

  if (stillsImgTarget || stillsLink) {
    document.querySelector('.modal').classList.add('shown');
    document.querySelector('.page').classList.add('page--modal-open');
    disableScrolling();
  }
};

// закрытие попапа
const closeModal = () => {
  document.querySelector('.modal').classList.remove('shown');
  document.querySelector('.page').classList.remove('page--modal-open');
  enableScrolling();
};

const closeModalMouseHandler = (evt) => {
  if (evt.target.classList.contains('photo-content__img')) {
    return;
  }
  closeModal();
};

const closeModalKeyHandler = (evt) => {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};

const popup = () => {
  window.addEventListener('click', (evt) => {
    const modal = evt.target.closest('.modal');
    const arrow = evt.target.closest('.modal-popap__arrow');
    const page = evt.target.closest('.page');
    const img = evt.target.closest('.stills__item-img');
    const modalLink = evt.target.closest('.stills__item-link');

    if (modal && !arrow) {
      evt.stopPropagation();
    } else if (page && !img && !modalLink) {
      closeModal();
    }
  });

  window.addEventListener('keydown', closeModalKeyHandler);
  document.querySelector('.stills').addEventListener('click', openModalHandler);
  document.querySelector('.modal-popup__close-button').addEventListener('click', closeModalMouseHandler);
  document.querySelector('.modal').addEventListener('click', renderModalImg);
}

export { popup, enableScrolling, closeModal };
