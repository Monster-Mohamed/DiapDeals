import React, { useContext } from 'react';
import OutlinedButton from '../../designs/Buttons/OutlinedButton';
import { AuthContainer } from './styles';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GoogleButton from '../../designs/Buttons/GoogleButton';
import { Divider } from '@mui/material';
import ModalPagesContext from '../../../context/modal-pages-context';

const AuthPage = () => {
  const { goTo } = useContext(ModalPagesContext);

  const login = () => {
    goTo('login');
  };

  const register = () => {
    goTo('register');
  };

  return (
    <AuthContainer>
      <OutlinedButton
        fullWidth
        startIcon={<MailOutlineIcon color="secondary" />}
        onClick={login}
      >
        Login With Email
      </OutlinedButton>
      <OutlinedButton
        fullWidth
        startIcon={<MailOutlineIcon color="secondary" />}
        onClick={register}
      >
        Signup With Email
      </OutlinedButton>
      <Divider sx={{ marginTop: '30px' }} />
      <GoogleButton />
    </AuthContainer>
  );
};

export default AuthPage;
