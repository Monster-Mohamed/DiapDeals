import * as Yup from 'yup';

var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

export const validationSecondPage = Yup.object().shape({
  phone_number: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number'),
  zip_code: Yup.string().matches(isValidZip, {
    message: 'Please enter a valid zip code',
  }),
  referrerEmail: Yup.string().email(),
});
