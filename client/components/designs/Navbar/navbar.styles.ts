import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../../../themes/colors.theme';

export const NavbarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: Colors.black,
  padding: '14px 8em',
  position: 'relative',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    padding: '14px 1em',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '14px 0.25em',
  },
}));

export const NavbarHeader = styled(Box)(({ theme }) => ({
  padding: '4px',
  fontSize: '2em',
  width: 180,
  color: Colors.white,
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.7em',
    width: 140,
  },
}));

export const NavbarMiddleSection = styled(Box)(({ theme }) => ({
  color: Colors.white,
  fontSize: '1.5em',
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  margin: '0 20px',
  [theme.breakpoints.down('lg')]: {
    margin: '0 10px',
    width: '80%',
  },
}));

export const NavbarIconsSectionContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  flexGrow: 1,
  color: Colors.white,
}));
