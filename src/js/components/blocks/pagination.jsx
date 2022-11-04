import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { paginationLinkHandler } from '../../handlers/handlers';
import { setPaginationStateOnClick, setPaginationStateOnload } from '../../handlers/pagination';
import { useSelectors } from '../../hooks/useSelectors';
import { setNumberPage } from '../../store/reducers/pagination-reducer';
import { PaginationLink } from '../ui/paginationLink-link';

const Pagination = () => {
  const { pageCount, emptyList } = useSelectors();
  const dispatch = useDispatch();
  const location = useLocation();
  const numOfPages = [];

  for (let i = 1; i <= pageCount; i++) {
    numOfPages.push(i);
  }

  useEffect(() => {
    setPaginationStateOnClick();
    setPaginationStateOnload();
  }, [pageCount]);

  return (
    <>
      <section className="pagination">
        {emptyList ?
          <h1 className="pagination__empty-list">Что-то пошло не так, список пуст</h1> :
          <>
            <button className="pagination__button pagination__button-start" type="button">«</button>
            <button className="pagination__button pagination__button-prev" type="button">‹</button>
            <div className="pagination-wrapper">
              <div className="pagination-inner-wrapper">
                <ul className="pagination__list">
                  {numOfPages.map((item) => (
                    <li className="pagination__item" key={item}>
                      <PaginationLink
                        onClick={() => dispatch(setNumberPage(item))}
                        to={paginationLinkHandler(location, item)}
                        className="pagination__link"
                      >{item}
                      </PaginationLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button className="pagination__button pagination__button-next" type="button">›</button>
            <button className="pagination__button pagination__button-end" type="button">»</button>
          </>
        }
      </section>
    </>
  );
}

export { Pagination };
