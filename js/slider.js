/**
 * инициализация слайдера
 */
function initSlider() {
  //Draggable Card Slider JavaScript

  const isAutoPlay = true;

  const wrapper = document.querySelector('.slider');
  const carousel = document.querySelector('.slider__carousel');
  const firstCardWidth = carousel.querySelector('.slider__card').offsetWidth;
  const buttons = document.querySelectorAll('.slider__button');
  const carouselChildren = [...carousel.children];

  const noTransitionClassname = 'slider__carousel--no-transition';
  const draggingClassname = 'slider__carousel--dragging';

  // Get the number of cards that can fit in the carousel at once
  const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

  console.log(carouselChildren);

  let isDragging = false;
  let startX;
  let startScrollLeft;
  let timeoutId;
  let count = 1;


  console.log(firstCardWidth);
  console.log(cardPerView);

  // Insert copies of the last few cards to beginning of carousel for infinite scrolling
  carouselChildren.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
  });

  // Insert copies of the first few cards to end of carousel for infinite scrolling
  carouselChildren.slice(0, cardPerView).forEach(card => {
    // console.log(card);
    carousel.insertAdjacentHTML('beforeend', card.outerHTML);
  });

  // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
  carousel.classList.add(noTransitionClassname);
  carousel.scrollLeft = carousel.offsetWidth;
  carousel.classList.remove(noTransitionClassname);

  // Add event listeners for the arrow buttons to scroll the carousel left and right
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      carousel.scrollLeft += button.id === 'left' ? -firstCardWidth : firstCardWidth;
      count++;
      console.log(count);
      //определить лево право
      //определить должно быть не больше кол-ва детей
    });
  });

  const dragStart = (event) => {
    isDragging = true;
    carousel.classList.add(draggingClassname);
    // Records the initial cursor and scroll position of the carousel
    startX = event.pageX;
    startScrollLeft = carousel.scrollLeft;
  }

  const dragging = (event) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (event.pageX - startX);
  }

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove(draggingClassname);
  }

  const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel.scrollLeft === 0) {
      carousel.classList.add(noTransitionClassname);
      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
      carousel.classList.remove(noTransitionClassname);
    }
    // If the carousel is at the end, scroll to the beginning
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
      carousel.classList.add(noTransitionClassname);
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove(noTransitionClassname);
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if (!wrapper.matches(':hover')) autoPlay();

  }

  const autoPlay = () => {
    if (!isAutoPlay) return;
    timeoutId = setTimeout(() => {
      carousel.scrollLeft += firstCardWidth
      count++;
      console.log(count);
    }, 10000);
  }
  autoPlay();

  carousel.addEventListener('mousedown', dragStart);
  carousel.addEventListener('mousemove', dragging);
  document.addEventListener('mouseup', dragStop);
  carousel.addEventListener('scroll', infiniteScroll);
  wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId));
  wrapper.addEventListener('mouseleave', autoPlay);
}

export { initSlider }
