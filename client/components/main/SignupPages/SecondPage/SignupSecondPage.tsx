import { FormControlLabel, Grid, Radio } from '@mui/material';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import ModalPagesContext from '../../../../context/modal-pages-context';
import { BACKEND_API } from '../../../../static/vars.static';
import MainForm from '../../../designs/Forms/MainForm';
import DateInput from '../../../designs/Forms/MainInputs/DateInput';
import MainInput from '../../../designs/Forms/MainInputs/MainInput';
import PhoneNumberInput from '../../../designs/Forms/MainInputs/PhoneNumberInput';
import RadioMainInput from '../../../designs/Forms/MainInputs/RadioMainInput';
import { secondPageInitialValues } from './initialValues';
import { validationSecondPage } from './validation';

const SignupSecondPage = () => {
  const { goTo } = useContext(ModalPagesContext);
  const [phoneInput, setPhoneInput] = useState('');
  const [gender, setGender] = useState('male');
  const [dateBirth, setDateBirth] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string>('');

  return (
    <MainForm
      initialValues={secondPageInitialValues}
      validation={validationSecondPage}
      setErrors={setErrors}
      btnText="Create Account"
      loading={loading}
      errors={errors}
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

        console.log(values);

        axios
          .put(BACKEND_API + '/users', formData)
          .then((data) => {
            goTo('verified');
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setErrors(err.response.data.message);
          });
      }}
    >
      <Grid
        container
        sx={{
          margin: '0 15px',
          marginTop: '15px',
        }}
      >
        <Grid item xs={12} sm={8}>
          <DateInput
            fullWidth
            helperText="You will get birthday gift"
            name="date_of_birth"
            label="Date Birth"
            placeholder="Date Birth"
            setValue={setDateBirth}
            value={dateBirth}
          />
        </Grid>
        <Grid item xs={12} sm={2} sx={{ marginLeft: '20px' }}>
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
        </Grid>
      </Grid>
      <PhoneNumberInput phoneInput={phoneInput} setPhoneInput={setPhoneInput} />
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
    </MainForm>
  );
};

export default SignupSecondPage;
