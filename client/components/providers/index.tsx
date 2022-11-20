import React, { FC } from 'react';
import { Children } from '../types/Children.type';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../themes/theme';
import { ModalPagesProvider } from '../../context/modal-pages-context';
import { AuthProvider } from '../../context/auth-context';

const Providers: FC<Children> = ({ children }) => {
  return (
    <AuthProvider>
      <ModalPagesProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ModalPagesProvider>
    </AuthProvider>
  );
};

export default Providers;
