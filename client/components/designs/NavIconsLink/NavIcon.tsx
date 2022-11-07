import React, { FC } from 'react';
import { NavIconButton, NavIconContainer } from './naviconslink.styles';
import { NavIconLinkType } from './naviconlink.type';

const NavIcon: FC<NavIconLinkType> = ({
  Icon,
  content,
  background,
  iconBackgroundHover,
}) => {
  return (
    <NavIconContainer iconBackgroundHover={iconBackgroundHover}>
      <NavIconButton background={background} disableRipple>
        <Icon fontSize="inherit" />
      </NavIconButton>
      <span>{content}</span>
    </NavIconContainer>
  );
};

export default NavIcon;
