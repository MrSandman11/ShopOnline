import renderPage from './modules/renderPage.js';
const {
  renderArticles,
  renderPagination,
} = renderPage;

document.addEventListener('DOMContentLoaded', () => {

  renderArticles();
  renderPagination();
});


