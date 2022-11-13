import React, { FC } from 'react';
import { ShowMainModal } from '../../../types/ShowMainModal';
import BlackScreen from '../../BlackScreen';
import MainModalUpperLayout from './MainModalUpperLayout/MainModalUpperLayout';
import { mainModalAnimation } from './animation';
import { MainModalContainer } from './styles';
import MainModalActions from './MainModalActions';

const MainModal: FC<ShowMainModal> = ({
  setShowState,
  header,
  subHeader,
  Form,
}) => {
  return (
    <>
      <MainModalContainer
        variants={mainModalAnimation}
        animate="visible"
        initial="hidden"
        exit="exit"
      >
        <MainModalUpperLayout />
        <MainModalActions
          Form={Form}
          header={header}
          subHeader={subHeader}
        />
      </MainModalContainer>
      <BlackScreen
        variants={mainModalAnimation}
        animate="visible"
        exit="exit"
        initial="hidden"
        setState={setShowState as any}
      />
    </>
  );
};

export default MainModal;
