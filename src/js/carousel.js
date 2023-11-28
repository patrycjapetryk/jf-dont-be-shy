export function scroll(item, scrollDistance) {
  const leftArrow = item.querySelector('.arrows__arrow--left-js');
  const rightArrow = item.querySelector('.arrows__arrow--right-js');
  const carousel = item.querySelector('.scroll-carousel__wrapper--js');

  const scrollRight = () => {
    carousel.scrollBy(scrollDistance, 0);
  };

  const scrollLeft = () => {
    carousel.scrollBy(-scrollDistance, 0);
  };

  leftArrow.addEventListener('click', scrollLeft);
  rightArrow.addEventListener('click', scrollRight);
}
