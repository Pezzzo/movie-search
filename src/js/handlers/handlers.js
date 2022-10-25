const paginationLinkHandler = (location, count) => {
  if (location.pathname.includes('top250')) {
    return `/top250=${count}`;
  }
  if (location.pathname.includes('popular')) {
    return `/popular=${count}`;
  }
};

const navLinkHandler = (evt) => {
  document.querySelectorAll('.page-nav__link').forEach((e) => {
    e.classList.remove('page-nav__link--active');
    evt.target.classList.add('page-nav__link--active');
  });
};

export { paginationLinkHandler, navLinkHandler };
