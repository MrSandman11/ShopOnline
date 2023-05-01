import pageElements from './getPageElements.js';
const {
  getPageElements,
} = pageElements;

import loadData from './loadData.js';
const {
  loadArticles,
} = loadData;

import createElements from './createElements.js';
const {
  createArticle,
  createPagination,
} = createElements;

import control from './control.js';
const {
  activePaginationControl,
} = control;

const renderArticles = async () => {
  const {
    mainContainer,
  } = getPageElements();
  const page = window.location.search.substring(6);
  const data = await loadArticles(page);
  const blogContainer = document.createElement('div');
  blogContainer.className = 'blog__container';

  const articles = data.data.map(item => {
    const card = createArticle(item);
    return card;
  });

  blogContainer.append(...articles);
  mainContainer.append(blogContainer);
};

const renderPagination = async () => {
  const {
    footerContainer,
  } = getPageElements();
  const page = window.location.search.substring(6);
  const data = await loadArticles(page);
  const pagination = createPagination(page, data);

  footerContainer.append(pagination);

  activePaginationControl(page, data);
};

export default {
  renderArticles,
  renderPagination,
};