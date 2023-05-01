const createHeader = (data) => {
  const header = document.createElement('nav');
  header.classList.add('header__navigalion');

  header.insertAdjacentHTML('beforeend', `
  <ul class="navigation-list">
    <li class="navigation-item">
      <a href="index.html" class="navigation-link">Главная</a>
    </li>
    <li class="navigation-item navigation-item_arrow"></li>
    <li class="navigation-item">
      <a href="blog.html" class="navigation-link">Блог</a>
    </li>
    <li class="navigation-item navigation-item_arrow"></li>
    <li class="navigation-item">
      <a href="#" class="navigation-link">${data.data.title}</a>
    </li>
  </ul>
  `);

  return header;
}

const createArticle = (data) => {
  const article = document.createElement('article');
  article.classList.add('article__wrapper');

  const articleHeader = document.createElement('h1');
  articleHeader.classList.add('article__header');
  articleHeader.textContent = `${data.data.title}`;

  const articleBody = document.createElement('p');
  articleBody.classList.add('article__body');
  articleBody.textContent = `${data.data.body}`;

  const articleFooter = document.createElement('div');
  articleFooter.classList.add('article__footer');

  articleFooter.insertAdjacentHTML('beforeend', `
  <div class="article__footer-back-link">
    <a href="blog.html" class="article__footer-back-link_ico"></a>
    <a href="blog.html" class="article__footer-back-link_text">К списку статей</a>
  </div>
  
  <div class="article__info">
    <p class="article__author">${data.data.user_id}</p>
    <p class="article__date">22 октября 2021, 12:45</p>
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
  </div>
  `);

  article.append(articleHeader, articleBody, articleFooter);

  return article;
};

const createAdvertizing = () => {
  const advertizing = document.createElement('div');
  advertizing.classList.add('advertising__wrapper');

  advertizing.insertAdjacentHTML('beforeend', `
  <a href="#" class="advertising__item advertising__item_1">
    <p class="item__title">Горящие туры в Стамбул от 20 000 руб.</p>
    <p class="item__subtitle">Окунись в настоящую восточную сказку</p>
  </a>
  <a href="#" class="advertising__item advertising__item_2">
    <p class="item__title">Новый RENAULT DUSTER</p>
    <p class="item__subtitle">Легендарный внедорожник в новом дизайне</p>
  </a>
  `);

  return advertizing;
};

export default {
  createHeader,
  createArticle,
  createAdvertizing,
};