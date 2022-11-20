import { AnimatePresence } from 'framer-motion';
import React, { useContext } from 'react';
import ModalPagesContext from '../../../../context/modal-pages-context';
import AuthPage from '../../../layouts/Auth';
import Login from '../../../layouts/Auth/Login';
import Signup from '../../../layouts/Auth/Signup';
import VerifiedModalPage from './MainModalActions/VerifiedModalPage';

const GetMainModalPage = () => {
  const { page } = useContext(ModalPagesContext);

  return (
    <AnimatePresence>
      {page === 'start' ? (
        <AuthPage />
      ) : page === 'register' || page === 'register-2' ? (
        <Signup />
      ) : page === 'login' ? (
        <Login />
      ) : (
        <VerifiedModalPage />
      )}
    </AnimatePresence>
  );
};

export default GetMainModalPage;
