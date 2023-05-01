import pageElements from './getPageElements.js';
const {
  getPageElements,
} = pageElements;

import loadData from './loadData.js';
const {
  loadArticle,
} = loadData;

import createElements from './createElements.js';
const {
  createHeader,
  createArticle,
  createAdvertizing,
} = createElements;


const renderArticle = async () => {
  const {
    headerContainer,
    mainContainer,
  } = getPageElements();
  const id = window.location.search.substring(1);
  const data = await loadArticle(id);
  const header = createHeader(data);
  const article = createArticle(data);
  const advertizing = createAdvertizing();

  headerContainer.append(header);
  mainContainer.append(article, advertizing);
};


export default {
  renderArticle,
};