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

  const inputs = [
    {
      id: '#company_name',
      pattern: ALL_SYMBOLS,
    },
    {
      id: '#phone',
      pattern: ALL_SYMBOLS,
    },
    {
      id: '#email',
      pattern: EMAIL_PATTERN,
    },
    {
      id: '#description',
      pattern: ALL_SYMBOLS,
    }
  ];

  let enableButton = false;
  const buttonPartner = document.querySelector('#button_partner');

  inputs.forEach((input) => {
    const inputElement = document.querySelector(input.id);
    const onInputElementChange = () => {

      if (input.pattern.test(inputElement.value)) {
        inputElement.classList.remove('input-field_error');
        enableButton = true;
      } else {
        inputElement.classList.add('input-field_error');
        enableButton = false;
      }
    }

    inputElement.addEventListener('input', onInputElementChange);
    if (enableButton === false) {
      console.log('enableButton',enableButton)
    }
  });

  buttonPartner.disabled = enableButton !== true;
}


// export { loadData }
