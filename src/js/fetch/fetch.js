const API_KEY = '8016fba8-eb34-412d-831d-71e9316c1569';
// const API_KEY = 'af7c9b5d-d938-441b-90e6-5e21ab4f4433';
// const API_KEY = '602dd412-6dcf-4106-b093-de836da7aaf6';
// const API_KEY = '2dcf472a-21e6-4742-b902-5796a587e6dd';
// import { pagePreloader } from '../page-preloader/page-preloader.js';

// import { useEffect, useState } from 'react';
import axios from 'axios';
import { URLS } from '../url/url';
import { getTop250 } from '../store/reducers/reducer';
import { getPageCount } from '../store/reducers/page-count-reducer';
// import { useDispatch } from 'react-redux';

const useData = (url) => {

  // const [data, setData] = useState([]);
  // const dispatch = useDispatch();

 return async (dispatch) => {
    try {

      const response = await axios({
        method: 'get',
        url: url,
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY,
        },
      });

      // top250, popular, keywordSearch
      if (url.includes(URLS.top250) || url.includes(URLS.popularFilms) || url.includes(URLS.keywordSearch)) {
        // setData(response.data.films);
        dispatch(getTop250(response.data.films));
        dispatch(getPageCount(response.data.pagesCount));
      }
      // else if (url.includes(URLS.actors)) {
      //   setData(response.data);
      // }

      console.log(response.data)
    } catch (e) {
      console.log(e);
    }
  }
}

export { useData };
