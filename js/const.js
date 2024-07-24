export const REGEX = /^[\s\n\t]+$/;

const TEXT = {
  string: /^[A-zА-яЁё0-9.\s-]+$/,
  name: 'Only letters, numbers, hyphens and periods are allowed',
}

const PHONE = {
  string: /^[0-9-+]+$/,
  name: 'Enter your phone number',
}

const EMAIL = {
  string: /^([a-z0-9._-]+@[a-z0-9._-]+)$/,
  name: 'Enter your email address',
}

export const inputsOptions = [
  {
    id: 'company-name',
    pattern: TEXT,
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
    pattern: TEXT,
    max: 200,
    required: true,
  },
];

export const RequestText = {
  successful: 'Thank You! Your company information has been sent successfully.',
  error: 'Error! Information not added',
}
