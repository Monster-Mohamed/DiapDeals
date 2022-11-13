import { AnimatePresence } from 'framer-motion';
import React, { FC, useState } from 'react';
import AuthPage from '../../../../layouts/Auth';
import SecondPage from './SecondPage';
import {
  MainModalActionsContainer,
  MainModalActionsHeader,
  MainModalActionsSubHeader,
} from './styles';
import { MainModalActionsType } from './type';

const MainModalActions: FC<MainModalActionsType> = ({
  header,
  subHeader,
  Form,
}) => {
  const [page, setPage] = useState(0);

  return (
    <MainModalActionsContainer>
      <MainModalActionsHeader variant="h1">{header}</MainModalActionsHeader>
      <MainModalActionsSubHeader variant="subtitle1">
        {subHeader}
      </MainModalActionsSubHeader>
      <AnimatePresence exitBeforeEnter>
        {page === 0 ? (
          <AuthPage />
        ) : page === 1 ? (
          <Form setPage={setPage} />
        ) : (
          <SecondPage />
        )}
      </AnimatePresence>
    </MainModalActionsContainer>
  );
};

export default MainModalActions;
