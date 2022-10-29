const pagePreloader = () => {
  setTimeout(() => {
    const preloader = document.querySelector('.preloader');
    !preloader.classList.contains('done') ? preloader.classList.add('done') : '';
  }, 100);
};

const setButtonUpVisibility = (cb, trueValue, falseValue) => {

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
  if (
    location.includes('movie') ||
    location.includes('actors') ||
    location.includes('personality') ||
    location.includes('search')
  ) {
    links.forEach((e) => {
      e.classList.remove('page-nav__link--active');
    });
  }
};

const enableScrolling = () => {
  window.onscroll = () => { };
};

const disableScrolling = () => {
  let x = window.scrollX;
  let y = window.scrollY;
  window.onscroll = () => {
    window.scrollTo(x, y);
  };
};

const getArrRenderedPaginationLinks = (array, range, part) => {
  let start = range * (part - 1);
  let end = (range * part);
  return array.slice(start, end);
};

const requestOptions = (url, key) => {
  return {
    method: 'get',
    url: url,
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": key,
    },
  }
};

export {
  setButtonUpVisibility,
  pagePreloader,
  setActiveClass,
  enableScrolling,
  disableScrolling,
  getArrRenderedPaginationLinks,
  requestOptions
};

