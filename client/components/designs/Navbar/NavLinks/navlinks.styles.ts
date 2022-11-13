import { List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../../../../themes/colors.theme';

export const NavLinksContainer = styled(List)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
  paddingTop: 4,

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    a: {
      borderBottom: `1px solid ${Colors.light}`,
    },
    'a:last-child': {
      borderBottom: `none`,
    },
  },
}));

export const NavLink = styled(ListItem)(({ theme }) => ({
  width: 'auto',
  fontSize: 16,
  fontWeight: 'bold',
  '&:hover': {
    color: Colors.light_gray,
  },
  [theme.breakpoints.down('lg')]: {
    padding: '10px 0',
  },
}));
