const getPageElements = () => {
  const headerContainer = document.querySelector('.header__container');
  const mainContainer = document.querySelector('.main__container');

  return {
    headerContainer,
    mainContainer,
  };
};

export default {
  getPageElements,
};
