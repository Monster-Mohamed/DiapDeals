import { HTMLMotionProps } from 'framer-motion';
import { Dispatch } from 'react';

export interface BlackScreenType {
  setState: Dispatch<React.SetStateAction<boolean>>;
}

export type motionDiv = HTMLMotionProps<'div'>;
