import React, { useState } from 'react';
import { ModalPages } from '../components/designs/Modals/MainModal/type';

const ModalPagesContext = React.createContext<{
  page: ModalPages;
  showModal: boolean;
  goTo: (page: ModalPages) => void;
  toggle: () => void;
  reset: () => void;
}>({
  page: 'start',
  showModal: false,
  goTo: (page: ModalPages) => {},
  toggle: () => {},
  reset: () => {},
});

export const ModalPagesProvider = (props: any) => {
  const [page, setPage] = useState<ModalPages>('start');
  const [showModal, setShowModal] = useState(false);

  const goTo = (page: ModalPages) => {
    setPage(page);
  };

  const toggle = () => {
    setShowModal(!showModal);
  };

  const reset = () => {
    setPage('start');
  };

  return (
    <ModalPagesContext.Provider
      value={{ page, showModal, goTo, toggle, reset }}
    >
      {props.children}
    </ModalPagesContext.Provider>
  );
};

export default ModalPagesContext;
