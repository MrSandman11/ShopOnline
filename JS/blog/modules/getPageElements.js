const getPageElements = () => {
  const mainContainer = document.querySelector('.main__container');
  const footerContainer = document.querySelector('.footer__container');

  return {
    mainContainer,
    footerContainer,
  };
};

export default {
  getPageElements
};
