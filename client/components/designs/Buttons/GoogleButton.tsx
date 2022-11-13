import React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';

const GoogleButton = () => {
  return (
    <GoogleLoginButton
      onClick={() => alert('hello')}
      style={{
        width: '100%',
        margin: '10px 0',
      }}
    />
  );
};

export default GoogleButton;
