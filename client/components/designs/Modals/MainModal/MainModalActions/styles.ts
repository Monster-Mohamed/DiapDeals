import { IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { motion } from 'framer-motion';
import { Colors } from '../../../../../themes/colors.theme';

export const MainModalActionsContainer = styled(Box)(() => ({
  padding: '10px 30px',
  textAlign: 'center',
  overflowX: 'hidden',
}));

export const MainModalActionsHeader = styled(Typography)(() => ({
  fontSize: 24,
  color: Colors.primary,
  fontWeight: 600,
  marginBottom: 10,
}));

export const MainModalActionsSubHeader = styled(Typography)(() => ({
  fontSize: 14,
  color: Colors.primary,
  marginBottom: 20,
}));

export const SecondPageContainer = styled(motion.div)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '40px 0',
  alignItems: 'center',
}));

export const VerifiedIconContainer = styled(IconButton)(() => ({
  fontSize: 80,
  color: Colors.success,
  cursor: 'default',
  marginTop: 10,
}));

export const VerifiedText = styled(Typography)(() => ({
  fontSize: 20,
  fontWeight: 600,
}));
