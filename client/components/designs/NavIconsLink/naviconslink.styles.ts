import { IconButton, List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../../../themes/colors.theme';

interface NavIconButtonType {
  background?: string;
}
interface NavIconButtonType {
  iconBackgroundHover?: string;
}

export const NavIconsLinkContainer = styled(List)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'start',
  padding: 0,
  width: '100%',

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));

export const NavIconContainer = styled(ListItem)<NavIconButtonType>(
  ({ iconBackgroundHover, theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: 120,
    padding: '0px 15px',
    '&:hover': {
      cursor: 'pointer',
      '& button': {
        background: iconBackgroundHover,
      },
      '& span': {
        color: Colors.light_gray,
      },
    },
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 10,
      padding: '5px 0',
      borderBottom: '1px solid white',
      '&:last-child': {
        borderBottom: 'none',
      },
    },
  })
);

export const NavIconButton = styled(IconButton)<NavIconButtonType>(
  ({ background, theme }) => ({
    fontSize: 40,
    marginBottom: 10,
    color: Colors.white,
    background: background ? background : Colors.white,
    padding: 8,

    [theme.breakpoints.down('lg')]: {
      marginRight: 15,
      padding: 4,
      fontSize: 30,
    },
  })
);

export const NavIconContent = styled(Typography)(() => ({
  fontWeight: 'bold',
}));
