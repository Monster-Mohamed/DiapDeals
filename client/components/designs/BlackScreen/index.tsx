import { FC } from 'react';
import { BlackScreenStyle } from './styles';
import { BlackScreenType, motionDiv } from './type';

const BlackScreen: FC<BlackScreenType & motionDiv> = ({ setState }) => {
  const close = () => {
    setState(false);
  };
  return <BlackScreenStyle onClick={close} />;
};

export default BlackScreen;
