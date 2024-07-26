import { throttle } from './utils.js';

/**
 * инициализация слайдера
 */
function initSlider() {
  const page = document.querySelector('.page');

  let slider = setSlider(page)

  const onWindowsResize = throttle(() => {
    slider.destroy();
    slider = setSlider(page);
  }, 500);

  window.addEventListener('resize', onWindowsResize);
}

/**
 * установка параметров слайдера
 * @param page
 * @return {any}
 */
function setSlider(page) {
  const items = page.clientWidth >= 1280 ? 3 : 1;

  setMaxHeight(page);

  return tns({
    container: '.slider__carousel',
    slideBy: 1,
    items: items,
    mouseDrag: true,
    speed: 400,
    prevButton: '.slider__button--prev',
    nextButton: '.slider__button--next',
    navContainer: '.slider__dots',
    center: true,
    navAsThumbnails: true,
    arrowKeys: true,
  });
}

/**
 * установка одинаковой высоты у страниц слайдера
 * @param page
 */
function setMaxHeight(page) {
  const sliderCards = page.querySelectorAll('.slider__card');
  let maxHeightCard = 0;

  sliderCards.forEach((card) => {
    maxHeightCard = maxHeightCard < card.offsetHeight ? card.offsetHeight : maxHeightCard;
  })

  sliderCards.forEach((card) => card.style.height = `${maxHeightCard}px`);
}

export { initSlider }
