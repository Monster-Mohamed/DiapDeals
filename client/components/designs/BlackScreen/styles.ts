import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Colors } from '../../../themes/colors.theme';

export const BlackScreenStyle = styled(motion.div)(({ theme }) => ({
  background: Colors.black,
  opacity: 0.2,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 98,
}));
