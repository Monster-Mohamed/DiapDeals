import { createTheme } from '@mui/material';
import { Colors } from './colors.theme';

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  shape: {
    borderRadius: 4,
  },
});
