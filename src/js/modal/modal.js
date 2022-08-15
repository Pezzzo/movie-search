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
  const stillsImg = document.querySelectorAll('.stills__item-img')
  const modalImg = document.querySelector('.modal-popup__img');
  const stillsImgTarget = evt.target.closest('.stills__item-img');

  modalImg.src = stillsImgTarget.src;
  if (evt.target.src === document.querySelectorAll('.stills__item-img')[0].src) {
    arrowBack.setAttribute('disabled', 'disabled');
  }
  if (evt.target.src === stillsImg[stillsImg.length - 1].src) {
    arrowforward.setAttribute('disabled', 'disabled');
  }

  if (stillsImgTarget) {
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


const popap = () => {
  window.addEventListener('click', (evt) => {
    if (evt.target.closest('.modal') && !evt.target.closest('.modal-popap__arrow')) {
      evt.stopPropagation();
    } else if (evt.target.closest('.page') && !evt.target.closest('.stills__item-img')) {
      closeModal();
    }
  });

  window.addEventListener('keydown', closeModalKeyHandler);
  document.querySelector('.stills__list').addEventListener('click', openModalHandler);
  document.querySelector('.modal-popup__close-button').addEventListener('click', closeModalMouseHandler);
  document.querySelector('.modal').addEventListener('click', renderModalImg);
}

export { popap, enableScrolling, closeModal };
