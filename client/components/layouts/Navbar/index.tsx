import useMatches from '../../../hooks/use-matches';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
  const smallScreens = useMatches('lg');

  if (smallScreens) {
    return <NavbarMobile />;
  } else {
    return <NavbarDesktop />;
  }
};

export default Navbar;
