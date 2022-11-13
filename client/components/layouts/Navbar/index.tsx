import { useState } from 'react';
import useMatches from '../../../hooks/use-matches';
import Signup from '../Auth/Signup';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
  const smallScreens = useMatches('lg');
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {smallScreens ? (
        <NavbarMobile setShowSignup={setShowSignup} />
      ) : (
        <NavbarDesktop setShowSignup={setShowSignup} />
      )}
      <Signup setShowSignup={setShowSignup} showSignup={showSignup} />
    </>
  );
};

export default Navbar;
