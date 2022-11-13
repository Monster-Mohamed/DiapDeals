import { GridProps } from '@mui/material';
import React, { FC } from 'react';
import { Icon } from '../../../../types/Icon.type';
import {
  MainModalUpperLayoutIcon,
  MainModalUpperLayoutItemStyled,
  MainModalUpperLayoutText,
} from '../styles';

const MainModalUpperLayoutItem: FC<GridProps & Icon> = ({ children, Icon }) => {
  return (
    <MainModalUpperLayoutItemStyled item xs={6}>
      <MainModalUpperLayoutIcon>
        <Icon fontSize="inhert" />
      </MainModalUpperLayoutIcon>
      <MainModalUpperLayoutText>{children}</MainModalUpperLayoutText>
    </MainModalUpperLayoutItemStyled>
  );
};

export default MainModalUpperLayoutItem;
