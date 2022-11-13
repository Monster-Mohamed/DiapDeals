import React from 'react';
import { MainModalActionsType } from '../designs/Modals/MainModal/MainModalActions/type';

export interface ShowMainModal extends MainModalActionsType {
  setShowState?: React.Dispatch<React.SetStateAction<boolean>>;
  showState?: boolean;
}
