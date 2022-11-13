import { Button, ButtonProps } from '@mui/material';
import React, { FC } from 'react';

const MainButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props} variant="contained" color="primary" fullWidth>
      {children}
    </Button>
  );
};

export default MainButton;
