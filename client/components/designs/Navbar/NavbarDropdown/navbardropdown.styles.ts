import { styled } from '@mui/material/styles';
import { Colors } from '../../../../themes/colors.theme';
import { motion } from 'framer-motion';

export const NavbarDropdownContainer = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: 90,
  right: 30,
  background: Colors.black,
  zIndex: 100,
  padding: '10px 20px',
  width: 350,
  color: Colors.white,
  borderRadius: 8,
  [theme.breakpoints.down('sm')]: {
    right: 0,
    left: 0,
    width: '100%',
  },
}));
