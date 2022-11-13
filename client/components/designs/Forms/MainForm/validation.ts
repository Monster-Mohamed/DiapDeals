import * as Yup from 'yup';

var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
var regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const validation = Yup.object().shape({
  first_name: Yup.string().required('Required'),
  last_name: Yup.string().required('Required'),
  email: Yup.string()
    .required('Required')
    .email('Your Email must be a valid email address'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      regularExpression,
      'Assert a string has at least one number,  Assert a string has at least one special character.'
    ),
  passwordConfirm: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  phone_number: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number'),
  zip_code: Yup.string().matches(isValidZip, {
    message: 'Please enter a valid zip code',
  }),
  referrerEmail: Yup.string().email(),
});
