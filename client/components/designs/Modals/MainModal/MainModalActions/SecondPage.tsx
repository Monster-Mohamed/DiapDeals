import React from 'react';
import {
  SecondPageContainer,
  VerifiedIconContainer,
  VerifiedText,
} from './styles';
import VerifiedIcon from '@mui/icons-material/Verified';
import GoRightContainer from '../../../Animations/GoRightContainer';

const SecondPage = () => {
  return (
    <GoRightContainer>
      <SecondPageContainer>
        <VerifiedText>Your Account Was Created Successfully</VerifiedText>
        <VerifiedIconContainer disableRipple>
          <VerifiedIcon fontSize="inherit" />
        </VerifiedIconContainer>
      </SecondPageContainer>
    </GoRightContainer>
  );
};

export default SecondPage;
