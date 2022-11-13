import {
  Alert,
  CircularProgress,
  FormControlLabel,
  Grid,
  Radio,
} from '@mui/material';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { FC, useState } from 'react';
import { BACKEND_API } from '../../../../static/vars.static';
import MainButton from '../../Buttons/MainButton';
import DateInput from '../MainInputs/DateInput';
import MainInput from '../MainInputs/MainInput';
import PhoneNumberInput from '../MainInputs/PhoneNumberInput';
import RadioMainInput from '../MainInputs/RadioMainInput';
import { initialValues } from './initialValues';
import { MainFormType } from './type';
import { validation } from './validation';

const MainForm: FC<MainFormType> = ({ setPage }) => {
  const [loading, setLoading] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const [gender, setGender] = useState('male');
  const [dateBirth, setDateBirth] = useState<Date | null>(null);
  const [errors, setErrors] = useState<string>('');

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={(values, formHelpers) => {
        values['phone_number'] = phoneInput;
        values['gender'] = gender;
        values['date_of_birth'] = dateBirth as any;

        const formData = {
          user: {
            ...values,
          },
        };
        console.log(formData);

        setLoading(true);

        axios
          .post(BACKEND_API + '/users', formData)
          .then((data) => {
            setPage(2);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setErrors(err.response.data.message);
          });
      }}
    >
      <Form>
        <Grid container spacing={2}>
          <MainInput
            name="first_name"
            alone
            label="First Name"
            placeholder="Enter Your First Name"
          />
          <MainInput
            name="last_name"
            alone
            label="Last Name"
            placeholder="Enter Your First Name"
          />
          <MainInput
            name="email"
            label="Email Address"
            placeholder="Enter Your Email Address"
          />
          <MainInput
            alone
            type="password"
            name="password"
            label="Password"
            placeholder="Enter Your Password"
          />
          <MainInput
            alone
            type="password"
            name="passwordConfirm"
            label="Password Confirm"
            placeholder="Repeat Your Password"
          />
          <PhoneNumberInput
            phoneInput={phoneInput}
            setPhoneInput={setPhoneInput}
          />
          <DateInput
            helperText="You will get birthday gift"
            name="date_of_birth"
            label="Date Birth"
            placeholder="Date Birth"
            setValue={setDateBirth}
            value={dateBirth}
          />
          <RadioMainInput
            value={gender}
            setValue={setGender}
            defaultValue="male"
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioMainInput>
          <MainInput
            type="tel"
            label="ZIP Code"
            name="zip_code"
            placeholder="Enter Your ZIP Code"
            helperText="To get your local deals near you"
          />
          <MainInput
            type="text"
            name="referrerEmail"
            label="Referrer Email"
            placeholder="Enter Your referrer email"
            helperText="You will win 10 points"
          />
          {errors && (
            <Grid item xs={12}>
              <Alert severity="error">{errors}</Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <MainButton type="submit">
              {loading ? <CircularProgress color="success" /> : 'Continue'}
            </MainButton>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default MainForm;
