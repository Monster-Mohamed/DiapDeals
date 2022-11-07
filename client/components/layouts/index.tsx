import React, { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../themes/theme';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* The Navbar Here */}
      <Navbar />

      {/* The Page Content */}
      <main>{children}</main>

      {/* The Footer Here */}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
