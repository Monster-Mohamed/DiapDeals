import { Button, ButtonProps, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { FC } from 'react';

const Outlined = styled(Button)(() => ({
  margin: '10px 0',
  padding: '10px 50px',
  position: 'relative',
  minWidth: 280,
}));

const OutlinedIcon = styled(IconButton)(() => ({
  position: 'absolute',
  left: 20,
  top: '50%',
  bottom: '50%',
  transform: 'translate(-50%, -50%)',
}));

const OutlinedButton: FC<ButtonProps> = ({ children, startIcon, ...props }) => {
  return (
    <Outlined
      color="secondary"
      startIcon={<OutlinedIcon disableRipple>{startIcon}</OutlinedIcon>}
      variant="outlined"
      {...props}
    >
      {children}
    </Outlined>
  );
};

export default OutlinedButton;
