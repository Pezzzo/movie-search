import { disableScrolling, enableScrolling } from "../util/util";

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

const buttonScrollUpHandler = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const openModalHandler = (cb) => {
  cb;
  disableScrolling();
};

const closeModalMouseHandler = (cb) => {
  cb;
  enableScrolling();
};

const closeModalKeyHandler = (evt) => {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    evt.preventDefault();
    enableScrolling();
  }
};



export {
  paginationLinkHandler,
  navLinkHandler,
  buttonScrollUpHandler,
  openModalHandler,
  closeModalMouseHandler,
  closeModalKeyHandler,

};
