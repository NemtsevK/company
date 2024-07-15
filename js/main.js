// import {initSlider, initMenu, setValidation} from './utils';

initSlider();
initMenu();
setValidation();

const RequestText = {
  successful: 'Thank You! Your company information has been sent successfully.',
  error: 'Error! Information not added',
}

const formPartner = document.querySelector('.form-partner');

async function onButtonPartnerSubmit (event) {
  event.preventDefault();
  const result = await sendPartnerData();
  const boxInputWrapper = document.querySelector('.yourself__main-inner');
  const boxInputResult = document.querySelector('.yourself__main-result');
  boxInputWrapper.classList.add('visually-hidden');
  boxInputResult.classList.remove('visually-hidden');
  boxInputResult.innerText = result === true ? RequestText.successful : RequestText.error;
}

formPartner.addEventListener('submit', onButtonPartnerSubmit);

/**
 * отправить данные на сервер
 * @return {Promise<*>}
 */
async function sendPartnerData(){
  const companyName = document.querySelector('#company-name');
  const phone = document.querySelector('#phone');
  const email = document.querySelector('#email');
  const description = document.querySelector('#description');

  const data = new URLSearchParams();
  data.append('company_name', companyName.value);
  data.append('phone', phone.value);
  data.append('email', email.value);
  data.append('description', description.value);

  return await loadData({ url: 'php/main.php', method: 'POST', body: data });
}
