import { Box, Grid, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Colors } from '../../../../themes/colors.theme';
import { Fonts } from '../../../../themes/fonts.theme';

export const MainModalContainer = styled(motion.div)(({ theme }) => ({
  position: 'fixed',
  zIndex: 99,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: Colors.white,
  width: 400,
  height: '85vh',
  overflowX: 'auto',
  paddingBottom: 30,
}));

export const MainModalUpperLayoutContainer = styled(Box)(() => ({
  background: Colors.primary,
  height: '30%',
  marginBottom: 25,
  color: Colors.white,
  fontFamily: Fonts.main,
  fontWeight: 'bold',
  padding: '20px 30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const MainModalUpperLayoutGridContainer = styled(Grid)(() => ({
  width: '80%',
}));

export const MainModalUpperLayoutItemStyled = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10px 0',
}));

export const MainModalUpperLayoutIcon = styled(IconButton)(() => ({
  fontSize: 35,
  color: Colors.white,
}));

export const MainModalUpperLayoutText = styled(Typography)(() => ({
  fontSize: 12,
  color: Colors.white,
  letterSpacing: 1.1,
}));
