import React, { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import MainModal from '../designs/Modals/MainModal';
import Providers from '../providers';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Providers>
      {/* Auth | Main Modal */}
      <MainModal />

      {/* The Navbar Here */}
      <Navbar />

      {/* The Page Content */}
      <main>{children}</main>

      {/* The Footer Here */}
      <Footer />
    </Providers>
  );
};

export default Layout;
