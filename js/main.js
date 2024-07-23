import { initSlider, initMenu, } from './utils.js';
import { initValidation } from './validation.js';

initSlider();
initMenu();

const form = document.querySelector('.form-partner');
const inputsElements = form.querySelectorAll('.form-partner__input');
const textElements = form.querySelectorAll('.form-partner__text-error');
const button = form.querySelector('.form-partner__button');

initValidation({ form, inputsElements, textElements, button });
