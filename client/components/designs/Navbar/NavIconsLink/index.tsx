import React, { FC } from 'react';
import NavIcon from './NavIcon';
import { NavIconsLinkContainer } from './naviconslink.styles';
import AddIcon from '@mui/icons-material/Add';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import { Colors } from '../../../../themes/colors.theme';

const NavIconsLink: FC<{ setShowState: any }> = ({ setShowState }) => {
  const openSignup = () => {
    if (setShowState) {
      setShowState(true);
    }
  };

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
        onClick={openSignup}
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
