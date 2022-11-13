import React, { FC } from 'react';
import { BurgerMenuIcon } from './burgermenu.styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface Burger {
  setOpenDropdownMenu: any;
  openDropdownMenu: boolean;
}

const BurgerMenu: FC<Burger> = ({ setOpenDropdownMenu, openDropdownMenu }) => {
  const burgerHandler = () => {
    setOpenDropdownMenu(!openDropdownMenu);
  };
  const onBlurHandler = () => {
    setTimeout(() => {
      setOpenDropdownMenu(false);
    }, 100);
  };
  return (
    <BurgerMenuIcon onBlur={onBlurHandler} onClick={burgerHandler}>
      {openDropdownMenu ? (
        <CloseIcon fontSize="inherit" />
      ) : (
        <MenuIcon fontSize="inherit" />
      )}
    </BurgerMenuIcon>
  );
};

export default BurgerMenu;
