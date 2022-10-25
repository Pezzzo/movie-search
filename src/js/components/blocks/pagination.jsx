import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { paginationLinkHandler } from '../../handlers/handlers';
import { setNumberPage } from '../../store/reducers/pagination-reducer';
import { PaginationLink } from '../ui/paginationLink-link';

const Pagination = ({ pageCount }) => {

  const dispatch = useDispatch();

  const location = useLocation();

  const numOfPages = [];

  for (let i = 1; i <= pageCount; i++) {
    numOfPages.push(i);
  }

  return (
    <section className="pagination">
      <button className="pagination__button pagination__button-start" type="button" disabled>«</button>
      <button className="pagination__button pagination__button-prev" type="button" disabled>‹</button>
      <div className="pagination-wrapper">
        <div className="pagination-inner-wrapper">
          <ul className="pagination__list">
            {numOfPages.map((item) => (
              <li className="pagination__item" key={item}>
                <PaginationLink
                  onClick={() => dispatch(setNumberPage(item))}
                  to={paginationLinkHandler(location, item)}
                  className="pagination__link"
                  data-movies-id="${i}"
                >{item}
                </PaginationLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="pagination__button pagination__button-next" type="button">›</button>
      <button className="pagination__button pagination__button-end" type="button">»</button>
    </section>
  );
}

export { Pagination };
