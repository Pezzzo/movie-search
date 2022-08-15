const paginationList = document.querySelector('.pagination__list');

const createPaginationLinks = (data) => {

  for (let i = 1; i <= data.pagesCount; i++) {
    paginationList.insertAdjacentHTML('beforeend', `
    <li class="pagination__item">
      <a class="pagination__link" data-movies-id="${i}">${i}</a>
    </li>
    `);
  }
};

export { createPaginationLinks };
