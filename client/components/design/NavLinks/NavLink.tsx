import { Navbar } from "flowbite-react";
import React from "react";
import { Children } from "../../types/Children.type";

export interface Link extends Children {
  href?: string;
}

const NavLink: React.FC<Link> = ({ children, href = "/" }) => {
  return (
    <Navbar.Link href={href}>
      <div className="text-white hover:text-slate-300 font-bold">
        {children}
      </div>
    </Navbar.Link>
  );
};

export default NavLink;
