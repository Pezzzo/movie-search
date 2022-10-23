import '../sass/styles.scss';
// import { pagePreloader } from './page-preloader/page-preloader.js';
// import { getHistory } from './history/history.js';
// import { selectAndRenderPage, renderPage } from './render/render.js';
// import { renderHomePage } from './render-functions/render-functions.js';
// import { showAvailablePages } from './pagination/pagination.js';
// import { switchFilters } from './filters/filters.js';
// import { goUp } from './go-up/go-up.js';
// import { closeModal } from './modal/modal.js';

// const init = () => {
//   switchFilters();
//   renderHomePage();
//   renderPage();
//   selectAndRenderPage();
//   showAvailablePages();
//   goUp();

//   window.addEventListener('popstate', () => {
//     if (document.querySelector('.shown')) {
//       closeModal();
//     }
//     getHistory();
//   });

//   document.body.onload = () => {
//     pagePreloader();
//   };
// };

// init();


import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/App';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

