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
 * инициализация меню навигации
 */
function initMenu() {
  const pattern = /(header|nav)+/;
  const page = document.querySelector('.page');
  const header = page.querySelector('.header');
  header.classList.remove('header--nojs');

  const nav = page.querySelector('.nav');
  const navToggle = header.querySelector('.header__toggle-nav');

  const toggleMenu = () => {
    const isClosed = nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
    navToggle.classList.toggle('header__toggle-nav--active');
    navToggle.setAttribute('aria-label', isClosed ? 'Открыть меню' : 'Закрыть меню');
  }

  const onPageClick =({target})=> {
    if(pattern.test(target.className) === false && nav.classList.contains('nav--opened')) {
      toggleMenu();
    }
  }

  const onNavToggleClick = () => toggleMenu();

  navToggle.addEventListener('click', onNavToggleClick);
  page.addEventListener('click', onPageClick);
}

/**
 *
 * @param form
 * @return {Promise<void>}
 */
async function setFormSuccess(form) {
  const result = await sendPartnerData();
  const text = result === true ? RequestText.successful : RequestText.error;
  setModal(text)
  if (result === true) form.reset()
}

/**
 * отправить данные на сервер
 * @return {Promise<boolean|*>}
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

  const closeModal = () => {
    modal.close();
    page.classList.remove('page--scroll-lock');
  }

  const onButtonClick = () => closeModal();

  const onModalClick = ({ currentTarget, target }) => {
    if (target === currentTarget) {
      closeModal();
    }
  }

  page.classList.add('page--scroll-lock');
  modal.showModal();
  modalText.innerText = text;

  modal.addEventListener('click', onModalClick);
  modal.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeModal();
    }
  })

  buttonModal.addEventListener('click', onButtonClick);
}

export { loadData, initMenu, setFormSuccess }
