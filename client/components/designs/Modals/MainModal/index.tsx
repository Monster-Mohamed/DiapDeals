import React, { FC, useContext } from 'react';
import BlackScreen from '../../BlackScreen';
import MainModalUpperLayout from './MainModalUpperLayout/MainModalUpperLayout';
import { mainModalAnimation } from './animation';
import { MainModalContainer } from './styles';
import MainModalActions from './MainModalActions';
import ModalPagesContext from '../../../../context/modal-pages-context';
import AppearSlowlyContainer from '../../Animations/AppearSlowlyContainer';
import { AnimatePresence } from 'framer-motion';

const MainModal = () => {
  const { showModal } = useContext(ModalPagesContext);

  return (
    <AnimatePresence>
      {showModal && (
        <AppearSlowlyContainer>
          <MainModalContainer
            variants={mainModalAnimation}
            animate="visible"
            initial="hidden"
            exit="exit"
          >
            <MainModalUpperLayout />
            <MainModalActions />
          </MainModalContainer>
          <BlackScreen
            variants={mainModalAnimation}
            animate="visible"
            exit="exit"
            initial="hidden"
          />
        </AppearSlowlyContainer>
      )}
    </AnimatePresence>
  );
};

export default MainModal;
