/**
 *
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
 *
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
 *
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
 */
function setValidation() {

  const ALL_SYMBOLS = /.*\S+./;
  const EMAIL_PATTERN = /^([a-z0-9._-]+@[a-z0-9-]+\.[a-z]+)$/;

  const form = document.querySelector('.form-partner');
  const inputList = Array.from(form.querySelectorAll('.form-partner__input'));
  const formErrorElement = form.querySelector('.form-partner__empty-error');

  startValidation();

  function startValidation() {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (hasInvalidInput()) {
        formError()
        inputList.forEach((inputElement) => {
          checkInputValidity(inputElement);
          toggleInputError(inputElement);
        })
      }
    })
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(inputElement);
      })
      inputElement.addEventListener('blur', () => {
        toggleInputError(inputElement);
      })
      inputElement.addEventListener('focus', () => {
        toggleErrorSpan(inputElement);
      })
    })
  }

  function checkInputValidity(inputElement) {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity(checkLengthMismatch(inputElement));
    }
  }

  function checkLengthMismatch(inputElement) {
    if (inputElement.type !== 'text') {
      return ''
    }
    const valueLength = inputElement.value.trim().length;
    if (valueLength < inputElement.minLength) {
      return `Минимальное количество символов: ${inputElement.minLength}`;
    }
    return ''
  }

  function hasInvalidInput() {
    return inputList.some(inputElement => !inputElement.validity.valid);
  }

  function toggleInputError(inputElement) {
    if (!inputElement.validity.valid) {
      toggleErrorSpan(inputElement, inputElement.validationMessage);
    } else {
      toggleErrorSpan(inputElement);
    }
  }

  function toggleErrorSpan(inputElement, errorMessage) {
    const errorElement = document.querySelector(`#${inputElement.id}-error`)
    if (errorMessage) {
      inputElement.classList.add('form-partner__input--error');
      errorElement.textContent = errorMessage;
      errorElement.classList.add('form-partner__error--active');
    } else {
      inputElement.classList.remove('form-partner__input--error');
      errorElement.textContent = '';
      errorElement.classList.remove('form-partner__error--active');
    }
  }

  function formError() {
    formErrorElement.textContent = 'Заполните все поля для отправки формы.';
  }
}


// export { loadData }
