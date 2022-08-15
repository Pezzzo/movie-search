import '../sass/styles.scss';
import { pagePreloader } from './page-preloader/page-preloader.js';
import { getHistory } from './history/history.js';
import { selectAndRenderPage, renderPage } from './render/render.js';
import { renderHomePage } from './render-functions/render-functions';
import { showAvailablePages } from './pagination/pagination.js';
import { switchFilters } from './filters/filters.js';
import { goUp } from './go-up/go-up.js';
import { closeModal } from './modal/modal';


const init = () => {
  switchFilters();
  renderHomePage();
  renderPage();
  selectAndRenderPage();
  showAvailablePages();
  goUp();

  window.addEventListener('popstate', () => {
    closeModal();
    getHistory();
  });

  document.body.onload = () => {
    pagePreloader();
  };
};

init();
