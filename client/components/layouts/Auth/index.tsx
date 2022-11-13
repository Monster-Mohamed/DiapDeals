import React from 'react';
import OutlinedButton from '../../designs/Buttons/OutlinedButton';
import { AuthContainer } from './styles';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Colors } from '../../../themes/colors.theme';
import GoogleButton from '../../designs/Buttons/GoogleButton';
import { Divider } from '@mui/material';

const AuthPage = () => {
  return (
    <AuthContainer>
      <OutlinedButton
        fullWidth
        startIcon={<MailOutlineIcon color="secondary" />}
      >
        Login With Email
      </OutlinedButton>
      <OutlinedButton
        fullWidth
        startIcon={<MailOutlineIcon color="secondary" />}
      >
        Signup With Email
      </OutlinedButton>
      <Divider sx={{ marginTop: '30px' }} />
      <GoogleButton />
    </AuthContainer>
  );
};

export default AuthPage;
