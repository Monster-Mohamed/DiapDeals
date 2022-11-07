import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../../../themes/colors.theme';

export const BurgerMenuIcon = styled(IconButton)(({ theme }) => ({
  fontSize: 50,
  color: Colors.white,
  margin: 0,
  padding: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: 35,
  },
}));
