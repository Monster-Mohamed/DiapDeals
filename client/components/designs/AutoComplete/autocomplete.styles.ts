import { IconButton, List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Colors } from '../../../themes/colors.theme';

export const AutoCompleteContainer = styled(List)(() => ({
  position: 'absolute',
  zIndex: 99,
  top: 42,
  background: Colors.white,
  color: Colors.black,
  width: '100%',
  fontSize: '14px',
  padding: 0,
  borderRadius: 8,
}));

export const AutocompleteItemContainer = styled(ListItem)(() => ({
  cursor: 'pointer',
  padding: '1px 10px',
}));

export const AutocompleteIcon = styled(IconButton)(() => ({
  marginRight: 8,
  cursor: 'auto',
}));
