import React from 'react';
import {
  MainModalUpperLayoutContainer,
  MainModalUpperLayoutGridContainer,
} from '../styles';
import MainModalUpperLayoutItem from './MainModalUpperLayoutItem';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import TextsmsIcon from '@mui/icons-material/Textsms';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MainModalUpperLayout = () => {
  return (
    <MainModalUpperLayoutContainer>
      <MainModalUpperLayoutGridContainer container>
        <MainModalUpperLayoutItem Icon={NotificationAddIcon}>
          CREATE ALERTS & SAVE SEARCHES
        </MainModalUpperLayoutItem>
        <MainModalUpperLayoutItem Icon={AutoGraphIcon}>
          PERSONALIZE YOUR EXPERIENCE
        </MainModalUpperLayoutItem>
        <MainModalUpperLayoutItem Icon={TextsmsIcon}>
          POST COMMENTS
        </MainModalUpperLayoutItem>
        <MainModalUpperLayoutItem Icon={FavoriteIcon}>
          SAVE DEALS
        </MainModalUpperLayoutItem>
      </MainModalUpperLayoutGridContainer>
    </MainModalUpperLayoutContainer>
  );
};

export default MainModalUpperLayout;
