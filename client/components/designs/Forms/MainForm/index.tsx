import { Alert, Button, CircularProgress, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import { FC, useContext, useState } from 'react';
import ModalPagesContext from '../../../../context/modal-pages-context';
import BackButton from '../../Buttons/BackButton';
import MainButton from '../../Buttons/MainButton';
import Captcha from '../../Captcha';
import { MainFormType } from './type';

const MainForm: FC<MainFormType> = (props) => {
  const [verified, setVerified] = useState(false);
  const { reset } = useContext(ModalPagesContext);

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={props.validation}
      onSubmit={(values, formHelpers) => {
        if (verified) {
          props.onSubmit(values, formHelpers);
        }
      }}
    >
      <Form>
        <Grid container spacing={2}>
          {props.children}
          <Captcha setVerified={setVerified} />
          {props.errors && (
            <Grid item xs={12}>
              <Alert severity="error">{props.errors}</Alert>
            </Grid>
          )}

          {props.goBack ? (
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={4} sx={{ marginRight: '20px' }}>
                <BackButton onClick={reset}>Back</BackButton>
              </Grid>

              <Grid item xs={12} sm={4}>
                <MainButton disabled={!verified} type="submit">
                  {props.loading ? (
                    <CircularProgress color="success" />
                  ) : (
                    props.btnText
                  )}
                </MainButton>
              </Grid>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <MainButton disabled={!verified} type="submit">
                {props.loading ? (
                  <CircularProgress color="success" />
                ) : (
                  props.btnText
                )}
              </MainButton>
            </Grid>
          )}
        </Grid>
      </Form>
    </Formik>
  );
};

export default MainForm;
