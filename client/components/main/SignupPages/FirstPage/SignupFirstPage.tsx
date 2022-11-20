import axios from 'axios';
import React, { useContext, useState } from 'react';
import ModalPagesContext from '../../../../context/modal-pages-context';
import { BACKEND_API } from '../../../../static/vars.static';
import MainForm from '../../../designs/Forms/MainForm';
import MainInput from '../../../designs/Forms/MainInputs/MainInput';
import { firstPageInitialValues } from './initialValues';
import { validationFirstPage } from './validation';

const SignupFirstPage = () => {
  const { goTo } = useContext(ModalPagesContext);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string>('');

  return (
    <MainForm
      initialValues={firstPageInitialValues}
      validation={validationFirstPage}
      setErrors={setErrors}
      btnText="Next"
      loading={loading}
      errors={errors}
      goBack={true}
      onSubmit={(values, formHelpers) => {
        const formData = {
          user: {
            ...values,
          },
        };

        setLoading(true);

        axios
          .post(BACKEND_API + '/users', formData)
          .then((data) => {
            
            goTo('register-2');
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setErrors(err.response.data.message);
          });
      }}
    >
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
        type="password"
        name="password"
        label="Password"
        placeholder="Enter Your Password"
      />
      <MainInput
        type="password"
        name="passwordConfirm"
        label="Password Confirm"
        placeholder="Repeat Your Password"
      />
    </MainForm>
  );
};

export default SignupFirstPage;
