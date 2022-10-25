import React, { ReactNode } from 'react';
import Footer from './Footer';
import Nav from './Nav';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-slate-50 h-full">
      {/* The Navbar Here */}
      <Nav />

      {/* The Page Content */}
      <main>{children}</main>

      {/* The Footer Here */}
      <Footer />
    </div>
  );
};

export default Layout;
