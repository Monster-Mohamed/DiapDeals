import { Button, ButtonProps } from '@mui/material';
import React, { FC } from 'react';
import { styled } from '@mui/material/styles';

const BackButtonContainer = styled(Button)(() => ({
  borderRadius: 7,
}));

const BackButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button variant="outlined" color="secondary" fullWidth {...props}>
      {children}
    </Button>
  );
};

export default BackButton;
