export const REGEX = /^[\s\n\t]+$/;

const ENGLISH = {
  string: /^[A-z0-9.\s-]+$/,
  name: 'Разрешены только цифры, дефис, точка и буквы английского алфавита',
}

const PHONE = {
  string: /^[0-9-+]+$/,
  name: 'Введите номер телефона.',
}

const EMAIL = {
  string: /^([a-z0-9._-]+@[a-z0-9._-]+)$/,
  name: 'Введите адрес электронной почты.',
}

export const inputsOptions = [
  {
    id: 'company-name',
    pattern: ENGLISH,
    max: 100,
    required: true,
  },
  {
    id: 'phone',
    pattern: PHONE,
    max: 30,
    required: true,
  },
  {
    id: 'email',
    pattern: EMAIL,
    max: 100,
    required: true,
  },
  {
    id: 'description',
    pattern: ENGLISH,
    max: 200,
    required: true,
  },
];

export const RequestText = {
  successful: 'Thank You! Your company information has been sent successfully.',
  error: 'Error! Information not added',
}
