import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { APP_NAME } from '../../../static/vars.static';
import BurgerMenu from '../../designs/BurgerMenu';
import {
  NavbarContainer,
  NavbarHeader,
  NavbarMiddleSection,
} from '../../designs/Navbar/navbar.styles';
import NavbarDropdown from '../../designs/NavbarDropdown';
import Searchbar from '../../designs/Searchbar';

const NavbarMobile = () => {
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);

  return (
    <NavbarContainer>
      <Link href="/">
        <NavbarHeader>{APP_NAME}</NavbarHeader>
      </Link>

      <NavbarMiddleSection>
        <Searchbar />
      </NavbarMiddleSection>

      <BurgerMenu
        openDropdownMenu={openDropdownMenu}
        setOpenDropdownMenu={setOpenDropdownMenu}
      />

      <AnimatePresence exitBeforeEnter>
        {openDropdownMenu && <NavbarDropdown />}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default NavbarMobile;
