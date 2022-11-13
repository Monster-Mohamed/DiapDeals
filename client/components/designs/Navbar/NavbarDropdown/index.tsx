import React, { FC } from 'react';
import NavIconsLink from '../NavIconsLink';
import NavLinks from '../NavLinks';
import { NavbarDropdownContainer } from './navbardropdown.styles';

const NavbarDropdown: FC<{ setShowSignup: any }> = ({ setShowSignup }) => {
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
      <NavIconsLink setShowState={setShowSignup} />
      <NavLinks />
    </NavbarDropdownContainer>
  );
};

export default NavbarDropdown;
