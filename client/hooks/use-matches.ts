import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export type Screen = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Type = 'down' | 'up';

/**
 *
 * @param screen the screens to dispaly, default = 'md'
 * @param type the screens to display, default = 'down'
 * @example screen == 'md' and the type is 'down' that's mean the screens will be medium and any screen smaller than medium screens
 * @example screen == 'md' and the type is 'up' that's mean the screens will be medium and any screens greater than medium screens
 * @returns matches: boolean
 */
const useMatches = (screen: Screen = 'md', type: Type = 'down') => {
  const theme = useTheme();
  const responsive =
    type === 'up'
      ? theme.breakpoints.up(screen)
      : theme.breakpoints.down(screen);
  const matches = useMediaQuery(responsive);

  return matches;
};

export default useMatches;
