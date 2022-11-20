import React, { useContext } from 'react';
import ModalPagesContext from '../../../../context/modal-pages-context';
import GoRightContainer from '../../../designs/Animations/GoRightContainer';
import {
  MainModalActionsHeader,
  MainModalActionsSubHeader,
} from '../../../designs/Modals/MainModal/MainModalActions/styles';
import SignupFirstPage from '../../../main/SignupPages/FirstPage/SignupFirstPage';
import SignupSecondPage from '../../../main/SignupPages/SecondPage/SignupSecondPage';

const Signup = () => {
  const { page } = useContext(ModalPagesContext);

  return (
    <GoRightContainer>
      <MainModalActionsHeader variant="h1">
        Create My Profile / Log In
      </MainModalActionsHeader>
      <MainModalActionsSubHeader variant="subtitle1">
        Welcome to DealNews! Sign in with
      </MainModalActionsSubHeader>
      {page === 'register' ? (
        <SignupFirstPage />
      ) : (
        page === 'register-2' && <SignupSecondPage />
      )}
    </GoRightContainer>
  );
};

export default Signup;
