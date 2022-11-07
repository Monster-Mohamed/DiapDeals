import React from 'react';
import NavIcon from './NavIcon';
import { NavIconsLinkContainer } from './naviconslink.styles';
import { Colors } from '../../../themes/colors.theme';
import AddIcon from '@mui/icons-material/Add';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';

const NavIconsLink = () => {
  return (
    <NavIconsLinkContainer>
      <NavIcon
        content="Add a Deal"
        Icon={AddIcon}
        background={Colors.blue500}
        iconBackgroundHover={Colors.blue600}
      />
      <NavIcon
        content="Sign Up"
        Icon={PersonIcon}
        background={Colors.orange500}
        iconBackgroundHover={Colors.orange600}
      />
      <NavIcon
        content="Earn Money"
        Icon={AttachMoneyIcon}
        background={Colors.dollarGreen500}
        iconBackgroundHover={Colors.dollarGreen600}
      />
    </NavIconsLinkContainer>
  );
};

export default NavIconsLink;
