import Link from 'next/link';
import React from 'react';
import { NavLink, NavLinksContainer } from './navlinks.styles';

const NavLinks = () => {
  return (
    <NavLinksContainer>
      <Link href="/online-deals">
        <NavLink>Online Deals</NavLink>
      </Link>
      <Link href="/local-deals">
        <NavLink>Local Deals</NavLink>
      </Link>
      <Link href="/olx">
        <NavLink>Olx Ads</NavLink>
      </Link>
    </NavLinksContainer>
  );
};

export default NavLinks;
