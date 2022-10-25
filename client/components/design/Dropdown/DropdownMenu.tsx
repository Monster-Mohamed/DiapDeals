import React from "react";

interface Drop {
  openDropdown?: any;
  children?: React.ReactNode;
}

const DropdownMenu: React.FC<Drop> = ({ openDropdown, children }) => {
  return (
    <div
      id="dropdown"
      className={`${
        !openDropdown && "hidden"
      } z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow`}
      data-popper-reference-hidden=""
      data-popper-escaped=""
      data-popper-placement="bottom"
      style={{
        position: "absolute",
        inset: "40px auto auto 0px",
        margin: 0,
        transform: "translate(0px, 10px)",
      }}
    >
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdown-button"
      >
        {children}
      </ul>
    </div>
  );
};

export default DropdownMenu;
