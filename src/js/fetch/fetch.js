const API_KEY = '8016fba8-eb34-412d-831d-71e9316c1569';
// const API_KEY = 'af7c9b5d-d938-441b-90e6-5e21ab4f4433';
// const API_KEY = '602dd412-6dcf-4106-b093-de836da7aaf6';
// const API_KEY = '2dcf472a-21e6-4742-b902-5796a587e6dd';
import { pagePreloader } from '../page-preloader/page-preloader.js';

const getData = async (url) => {
  return await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  })
    .then((response) => {

      if (response.ok) {
        pagePreloader();
        return response.json();
      } else {
        throw new Error('Could not find data');
      }
    })
    .catch((error) => {
      console.error(error);
      document.body.style.fontSize = '40px';
      document.body.style.textAlign = 'center';
      document.body.style.paddingTop = '60px';
      document.body.textContent = error;
    });
};

export { getData };
