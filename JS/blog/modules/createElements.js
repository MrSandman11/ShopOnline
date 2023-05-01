const createArticle = (data) => {
  const article = document.createElement('a');
  article.classList.add('article__wrapper');
  article.href = `article.html?${data.id}`;

  const image = document.createElement('img');
  image.classList.add('article__img');
  image.src = "img/no-image.png";
  image.alt = "#";

  const info = document.createElement('div');
  info.classList.add('article__info');

  const header = document.createElement('h3');
  header.classList.add('article__header');
  header.textContent = `${data.title}`;

  const date = document.createElement('p');
  date.classList.add('article__date');
  date.textContent = '22 октября 2021, 12:45';

  info.append(header, date);
  info.insertAdjacentHTML('beforeend', `
  <div class="article__stats">
    <div class="article__views">
      <div class="article__views-ico"></div>
      <p class="article__views-count">1.2K</p>
    </div>
    <div class="article__comments">
      <div class="article__comments-ico"></div>
      <p class="article__comments-count">0</p>
    </div>
  </div>
  `);

  article.append(image, info);

  return article;
};

const createPagination = (page, data) => {
  const lastPage = data.meta.pagination.pages;
  let prevPage;
  let activePage;
  let nextPage;
  if (+page === lastPage) {
    prevPage = lastPage - 2;
    activePage = lastPage - 1;
    nextPage = lastPage;
  } if (+page !== 1 && +page !== lastPage) {
    prevPage = +page - 1;
    activePage = +page;
    nextPage = +page + 1;
  } if (!page || +page === 1) {
    prevPage = 1;
    activePage = 2;
    nextPage = 3;
  } 
  const prevPageNum = prevPage.toString();
  const activePageNum = activePage.toString();
  const nextPageNum = nextPage.toString();

  const pagination = document.createElement('div');
  pagination.classList.add('pagination');
  pagination.insertAdjacentHTML('beforeend', `
  <a href="?page=${prevPage}" class="pagination__arrow pagination__arrow_left">
  </a>
  <div class="pagination__page-block">
    <a href="?page=${prevPage}" class="pagination__page pagination__page_active">${prevPageNum}</a>
    <a href="?page=${activePage}" class="pagination__page">${activePageNum}</a>
    <a href="?page=${nextPage}" class="pagination__page">${nextPageNum}</a>
  </div>
  <a href="?page=${nextPage}" class="pagination__arrow pagination__arrow_right">
  </a>
  `);

  return pagination;
};

export default {
  createArticle,
  createPagination,
};