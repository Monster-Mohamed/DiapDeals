import React from 'react';
import NavIconsLink from '../NavIconsLink';
import NavLinks from '../NavLinks';
import { NavbarDropdownContainer } from './navbardropdown.styles';

const NavbarDropdown = () => {
  return (
    <NavbarDropdownContainer
      initial={{ y: '-100vh' }}
      animate={{ y: 0 }}
      exit={{
        y: [0, 40, -500],
        transition: {
          duration: 0.4,
        },
      }}
    >
      <NavIconsLink />
      <NavLinks />
    </NavbarDropdownContainer>
  );
};

export default NavbarDropdown;
