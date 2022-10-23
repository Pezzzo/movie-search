import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useData } from '../../fetch/fetch';
import { useSelectors } from '../../hooks/useSelectors';
import { URLS } from '../../url/url';

const Top250 = () => {

  const dispatch = useDispatch();
  const { top250, pageCount } = useSelectors();

  const numOfPages = [];

  for (let i = 1; i <= pageCount; i++) {
    numOfPages.push(i);
  }

console.log(numOfPages)

  useEffect(() => {
    dispatch(useData(URLS.top250));
  }, [dispatch]);

  return (
    <main className="page-main outer-wrapper">
      <h1>Top250</h1>


      <section className="pagination">
      <button className="pagination__button pagination__button-start" type="button" disabled>«</button>
      <button className="pagination__button pagination__button-prev" type="button" disabled>‹</button>
      <div className="pagination-wrapper">
        <div className="pagination-inner-wrapper">
        <ul className="pagination__list">
      {numOfPages.map((item) => (
            <li className="pagination__item" key={item}>
            <a className="pagination__link" data-movies-id="${i}">{item}</a>
          </li>
      ))}
      </ul>
        </div>
      </div>
      <button className="pagination__button pagination__button-next" type="button">›</button>
      <button className="pagination__button pagination__button-end" type="button">»</button>
    </section>






      <ul className="movies-catalog__list">
        {top250.map((item) => (
          <li className="movies-catalog__item" key={item.filmId}>
            <p className="movies-catalog__item-rating">{item.rating}</p>
            <a className="movies-catalog__link link-item" data-movies-id="${filmId}">
              <img className="movies-catalog__item-img" id="movie" src={item.posterUrlPreview} width="280" height="420" alt="movie" />
              <h3 className="movies-catalog__title">{item.nameRu}</h3>
              <p className="movies-catalog__date">{item.year}</p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
export { Top250 };
