import { AnimatePresence } from 'framer-motion';
import React, { FC } from 'react';
import GetMainModalPage from '../GetMainModalPage';
import { MainModalActionsContainer } from './styles';

const MainModalActions = () => {
  return (
    <MainModalActionsContainer>
      <AnimatePresence exitBeforeEnter>
        <GetMainModalPage />
      </AnimatePresence>
    </MainModalActionsContainer>
  );
};

export default MainModalActions;
