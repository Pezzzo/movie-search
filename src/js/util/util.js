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
  if (location.includes('movie')) {
    links.forEach((e) => {
      e.classList.remove('page-nav__link--active');
    });
  }
};

export { goUp, pagePreloader, scrollUp, setActiveClass };

