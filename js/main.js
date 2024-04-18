const all_symbols = /.*\S+./;
const email_pattern = /^([a-z0-9._-]+@[a-z0-9-]+\.[a-z]+)$/;
const company_name = {
  id: '#company_name',
  pattern: all_symbols,
  type: 'input_text',
};
const phone = {
  id: '#phone',
  pattern: all_symbols,
  type: 'input_text',
};
const email = {
  id: '#email',
  pattern: email_pattern,
  type: 'input_text',
};
const description = {
  id: '#description',
  pattern: all_symbols,
  type: 'text_area',
};
const input = [company_name, phone, email, description];

$(document).ready(function () {
  for (let i = 0; i < input.length; i++) {
    $(input[i].id).on('input', function () {
      if (input[i].pattern.test($(input[i].id).val())) {
        $(input[i].id).removeClass('input-field_error');
      } else {
        $(input[i].id).addClass('input-field_error');
      }
    });
  }

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

  $('.header__menu-collapse').click(function () {
    $('.header__menu-collapse').toggleClass('open-menu');
    $('.header__nav').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
  });

});

const getUsers = async (company_name, phone, email, description) => {
  let text_result = '';
  try {
    let response = await fetch(
      `ajax.php?company_name=${company_name}&phone=${phone}&email=${email}&description=${description}`
    );
    if (response.ok) {
      text_result += `<p>Thank You! Your company information has been sent successfully.</p>`;
      text_result += `<p><a class="text-link" href="table.php?email=${email}">View the list of your requests</a></p>`;

      $('#company_name').addClass('input-field_error').val('');
      $('#phone').addClass('input-field_error').val('');
      $('#email').addClass('input-field_error').val('');
      $('#description').addClass('input-field_error').val('');
      $('#send-data-partner').attr('disabled', 'disabled');
    }
  } catch (error) {
    console.log(error);
    text_result = '<p>Error! Information not added</p>';
  }
  $('.box-input-wrapper').html(text_result);
};

document.querySelector('.send-data-partner').onsubmit = function (evt) {
  evt.preventDefault();
  const company_name = document.querySelector('#company_name').value;
  const phone = document.querySelector('#phone').value;
  const email = document.querySelector('#email').value;
  const description = document.querySelector('#description').value;
  getUsers(company_name, phone, email, description);
};
