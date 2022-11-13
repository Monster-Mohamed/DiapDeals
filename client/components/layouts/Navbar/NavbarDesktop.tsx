import Link from 'next/link';
import React, { FC } from 'react';
import { APP_NAME } from '../../../static/vars.static';
import {
  NavbarIconsSectionContainer,
  NavbarContainer,
  NavbarHeader,
  NavbarMiddleSection,
} from '../../designs/Navbar/navbar.styles';
import NavIconsLink from '../../designs/Navbar/NavIconsLink';
import NavLinks from '../../designs/Navbar/NavLinks';
import Searchbar from '../../designs/SearchbarComponents/Searchbar';
import { NavbarType } from './Navbar.type';

const NavbarDesktop: FC<NavbarType> = ({ setShowSignup }) => {
  return (
    <NavbarContainer>
      <Link href="/">
        <NavbarHeader>{APP_NAME}</NavbarHeader>
      </Link>

      <NavbarMiddleSection>
        <Searchbar />
        <NavLinks />
      </NavbarMiddleSection>

      <NavbarIconsSectionContainer>
        <NavIconsLink setShowState={setShowSignup} />
      </NavbarIconsSectionContainer>
    </NavbarContainer>
  );
};

export default NavbarDesktop;
