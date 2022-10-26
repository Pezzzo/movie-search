// автоматический скрол наверх
const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const pagePreloader = () => {
  setTimeout(() => {
    const preloader = document.querySelector('.preloader');
    !preloader.classList.contains('done') ? preloader.classList.add('done') : '';
  }, 100);
};


const goUp = (cb, trueValue, falseValue) => {

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      cb(falseValue);
    } else {
      cb(trueValue);
    }
  });
};


const setActiveClass = (location) => {

  const links = document.querySelectorAll('.page-nav__link');

  links.forEach((e) => {
    e.classList.remove('page-nav__link--active');
  });

  if (!location.includes('top250') && !location.includes('popular')) {
    document.querySelector('.page-nav__link-home').classList.add('page-nav__link--active');
  }
  if (location.includes('top250')) {
    document.querySelector('.page-nav__link-top250').classList.add('page-nav__link--active');
  }
  if (location.includes('popular')) {
    document.querySelector('.page-nav__link-popular').classList.add('page-nav__link--active');
  }
  if (location.includes('movie') || location.includes('actors')) {
    links.forEach((e) => {
      e.classList.remove('page-nav__link--active');
    });
  }
};

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

const openModal = (cb) => {
  cb(true);
  disableScrolling();
};

const closeModal = (cb) => {
  cb(false);
  enableScrolling();
};


const closeModalKey = (evt) => {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    evt.preventDefault();
    enableScrolling();
  }
};

export { goUp, pagePreloader, scrollUp, setActiveClass, openModal, closeModal, closeModalKey };

