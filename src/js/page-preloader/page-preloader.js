const pagePreloader = () => {
  setTimeout(() => {
    const preloader = document.querySelector('.preloader');
    !preloader.classList.contains('done') ? preloader.classList.add('done') : '';
  }, 100);
};

export {pagePreloader};
