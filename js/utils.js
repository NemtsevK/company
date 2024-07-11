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
  const menuCollapse = document.querySelector('.header__menu-collapse');

  const onMenuCollapseClick = () => {
    const body = document.querySelector('.page__body');
    const nav = document.querySelector('.header__nav');
    menuCollapse.classList.toggle('open-menu');
    body.classList.toggle('fixed-page');
    nav.classList.toggle('open-menu');
  }

  menuCollapse.addEventListener('click', onMenuCollapseClick);
}

/**
 *
 */
function setValidation() {

  const ALL_SYMBOLS = /.*\S+./;
  const EMAIL_PATTERN = /^([a-z0-9._-]+@[a-z0-9-]+\.[a-z]+)$/;

  const form = document.querySelector('.form-partner');
  const inputList = Array.from(form.querySelectorAll('.form-partner__input'));
  const buttonElement = form.querySelector('.form-partner__button');
  const formErrorElement = form.querySelector('.form-partner__empty-error');

  toggleButton();

  startValidation();

  function startValidation() {
    toggleButton();
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
        toggleButton();
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

  function toggleErrorSpan(inputElement, errorMessage){
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

  function toggleButton() {
    if (hasInvalidInput()) {
      buttonElement.disabled = true;
      // buttonElement.setAttribute('aria-disabled', 'true');
    } else {
      buttonElement.disabled = false;
      // buttonElement.setAttribute('aria-disabled', 'false');
      formErrorElement.textContent = '';
    }
  }

  function formError() {
    formErrorElement.textContent = 'Заполните все поля для отправки формы.';
  }
}


// export { loadData }
