import { RequestText } from './const.js'

/**
 * загрузка данных на сервер и их получение
 * @param url
 * @param method
 * @param body
 * @param headers
 * @returns {Promise<any>}
 */
async function loadData({
  url,
  method = 'GET',
  body = null,
  headers = { 'Content-Type': 'application/x-www-form-urlencoded' },
}) {
  try {
    const response = await fetch(url, { method, body, headers });
    return await response.json();
  } catch (error) {
    throw Error(error);
  }
}

/**
 * инициализация слайдера
 */
function initSlider() {
  $('.slider__list').slick({
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    speed: 800,
    centerMode: true,
    variableWidth: true,
    appendArrows: $('.slider__arrows'),
    appendDots: $('.slider__dots'),
    responsive: [
      {
        breakpoint: 100,
        settings: {
          centerMode: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          centerMode: true,
          variableWidth: true,
        }
      },
    ]
  });
}

/**
 * инициализация меню навигации
 */
function initMenu() {
  const page = document.querySelector('.page');
  const header = document.querySelector('.header');
  header.classList.remove('header--nojs');

  const nav = document.querySelector('.nav');
  const navToggle = header.querySelector('.header__toggle-nav');

  const onNavToggleClick = (event) => {
    const isClosed = nav.classList.toggle('nav--closed');
    page.classList.toggle('page--scroll-lock')
    nav.classList.toggle('nav--opened');
    event.currentTarget.classList.toggle('header__toggle-nav--active');
    navToggle.setAttribute('aria-label', isClosed ? 'Открыть меню' : 'Закрыть меню');
  }

  navToggle.addEventListener('click', onNavToggleClick);
}

/**
 *
 * @return {Promise<void>}
 */
async function setFormSuccess() {
  const result = await sendPartnerData();
  const text = result === true ? RequestText.successful : RequestText.error;
  setModal(text)
}

/**
 * отправить данные на сервер
 * @return {Promise<*>}
 */
async function sendPartnerData() {
  const companyName = document.querySelector('#company-name');
  const phone = document.querySelector('#phone');
  const email = document.querySelector('#email');
  const description = document.querySelector('#description');

  const data = new URLSearchParams();
  data.append('company_name', companyName.value);
  data.append('phone', phone.value);
  data.append('email', email.value);
  data.append('description', description.value);

  try {
    return await loadData({ url: 'php/main.php', method: 'POST', body: data });
  } catch (error) {
    return false;
  }
}

/**
 * добавить модальное окно
 * @param text
 */
function setModal(text) {
  const page = document.querySelector('.page');
  const modal = document.querySelector('.modal');
  const modalText = modal.querySelector('.modal__text')
  const buttonModal = modal.querySelector('.modal__button');

  const onButtonClick = () => {
    modal.close();
    page.classList.remove('page--scroll-lock');
  }

  const onModalClick = ({ currentTarget, target }) => {
    if (target === currentTarget) {
      currentTarget.close();
      page.classList.remove('page--scroll-lock');
    }
  }

  page.classList.add('page--scroll-lock');
  modal.showModal();
  modalText.innerText = text;

  modal.addEventListener('click', onModalClick);
  buttonModal.addEventListener('click', onButtonClick);
}

export { loadData, initSlider, initMenu, setFormSuccess }
