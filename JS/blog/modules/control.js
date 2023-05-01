const activePaginationControl = (page, data) => {
  const activePageControl = () => {
    const pag = document.querySelectorAll('.pagination__page');
    
    if (!page) {
      pag[0].classList.add('pagination__page_active');
      pag[1].classList.remove('pagination__page_active');
      pag[2].classList.remove('pagination__page_active');
    } else {
      pag.forEach(elem => {
        if (elem.textContent === page) {
          elem.classList.add('pagination__page_active');
        } else {
          elem.classList.remove('pagination__page_active');
        }
      });
    }
  };

  const activeArrowControl = () => {
    const lastPage = data.meta.pagination.pages;
    const arrows = document.querySelectorAll('.pagination__arrow');
    arrows.forEach(elem => {
      switch (+page) {
        case 1:
          if (elem.classList.contains('pagination__arrow_right')) {
            elem.classList.add('pagination__arrow_right_active');
          }
          break;
        case 0:
        if (elem.classList.contains('pagination__arrow_right')) {
          elem.classList.add('pagination__arrow_right_active');
        }
        break;
        case lastPage:
          if (elem.classList.contains('pagination__arrow_left')) {
            elem.classList.add('pagination__arrow_left_active');
          }
          break;
        default:
          if (elem.classList.contains('pagination__arrow_right')) {
            elem.classList.add('pagination__arrow_right_active');
          } if (elem.classList.contains('pagination__arrow_left')) {
            elem.classList.add('pagination__arrow_left_active');
          }
      }

      if (+page === 1 || +page === 0) {
        arrows[0].href = "#";
        arrows[1].href = "?page=2";
      } if (+page === lastPage) {
        arrows[1].href = "#";
        arrows[0].href = `?page=${lastPage - 1}`;
      }
    });
  };

  activePageControl();
  activeArrowControl();
};

export default {
  activePaginationControl,
}
