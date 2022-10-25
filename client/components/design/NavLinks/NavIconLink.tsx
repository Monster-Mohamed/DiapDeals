import React from "react";
import { Link as NavLink } from "./NavLink";
import styles from "./NavIconLink.module.scss";
import Link from "next/link";

interface IconLink extends NavLink {
  Icon: React.ElementType;
  color?: string;
}

const NavIconLink: React.FC<IconLink> = ({
  children,
  href = "/",
  Icon,
  color,
}) => {
  return (
    <Link href={href}>
      <div
        className={`${styles.parent} flex flex-col items-center cursor-pointer`}
      >
        <Icon className={`text-[45px] p rounded-full mb-3 ${color} `} />
        <div className={`text-white font-bold`}>{children}</div>
      </div>
    </Link>
  );
};

export default NavIconLink;
