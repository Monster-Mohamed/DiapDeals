import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../../../../themes/colors.theme';

export const SearchbarContainer = styled('form')(() => ({
  position: 'relative',
}));

export const SearchbarInput = styled('input')(({ theme }) => ({
  background: Colors.white,
  height: '44px',
  padding: '0 6px 0 22px',
  border: 'none',
  width: '100%',
  borderRadius: '22px',
  fontSize: '14px',

  [theme.breakpoints.down('sm')]: {
    '&::placeholder': {
      color: Colors.white,
    },
  },
}));

export const SearchButton = styled(IconButton)(() => ({
  position: 'absolute',
  color: Colors.black,
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
}));
