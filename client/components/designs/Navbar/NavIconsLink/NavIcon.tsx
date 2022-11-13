import React, { FC } from 'react';
import { NavIconButton, NavIconContainer } from './naviconslink.styles';
import { NavIconLinkType } from './naviconlink.type';

const NavIcon: FC<NavIconLinkType> = ({
  Icon,
  content,
  background,
  iconBackgroundHover,
  onClick,
}) => {
  return (
    <NavIconContainer
      onClick={onClick}
      iconBackgroundHover={iconBackgroundHover}
    >
      <NavIconButton background={background} disableRipple>
        <Icon fontSize="inherit" />
      </NavIconButton>
      <span>{content}</span>
    </NavIconContainer>
  );
};

export default NavIcon;
