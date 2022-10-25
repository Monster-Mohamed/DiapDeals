import { Navbar } from "flowbite-react";
import Searchbox from "../../design/Searchbox/Searchbox";
import NavLink from "../../design/NavLinks/NavLink";
import NavIconLink from "../../design/NavLinks/NavIconLink";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlinePlus } from "react-icons/hi";
import Link from "next/link";

const Nav = () => {
  return (
    <Navbar
      className="bg-black text-white items-start justify-start"
      fluid={false}
      rounded={true}
    >
      <div className="mx-auto flex flex-wrap items-center justify-around md:justify-center container">
        {/* Brand */}
        <Link href="/">
          <Navbar.Brand className="cursor-pointer md:mr-5 md:mb-10">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold md:block hidden">
              Diap Deals
            </span>
          </Navbar.Brand>
        </Link>

        <div className="flex md:w-6/12 md:flex-col">
          <Searchbox
            placeholder="Search online deals, local deals, olx section and more..."
            className="w-12/12 mt-4"
          />
          <Navbar.Collapse className="md:py-4">
            <NavLink href="/">Online Deals</NavLink>
            <NavLink href="/">Local Deals</NavLink>
            <NavLink href="/">Olx Section</NavLink>
          </Navbar.Collapse>
        </div>

        <Navbar.Toggle />

        {/* Right Section */}
        <div className="md:w-2/12">
          <Navbar.Collapse>
            <div className="w-full flex justify-around">
              <NavIconLink
                color="text-white bg-blue-700"
                Icon={HiOutlinePlus}
                href="/add/online-deals"
              >
                Add a Deal
              </NavIconLink>
              <NavIconLink
                color="bg-red-700 text-white"
                Icon={AiOutlineUser}
                href="/user/signup"
              >
                Sign Up
              </NavIconLink>
            </div>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default Nav;
