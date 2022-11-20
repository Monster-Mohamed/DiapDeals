import { FC, useContext } from 'react';
import ModalPagesContext from '../../../context/modal-pages-context';
import { BlackScreenStyle } from './styles';
import { motionDiv } from './type';

const BlackScreen: FC<motionDiv> = () => {
  const { toggle, goTo } = useContext(ModalPagesContext);

  const close = () => {
    toggle();
    const timer = setTimeout(() => {
      goTo('start');
      clearTimeout(timer);
    }, 500);
  };
  return <BlackScreenStyle onClick={close} />;
};

export default BlackScreen;
