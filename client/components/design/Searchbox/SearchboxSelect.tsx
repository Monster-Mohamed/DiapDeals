import React, { FC, SetStateAction } from "react";

interface SearchBtnType {
  title: string;
  setSelected?: SetStateAction<any>;
  setOpenDropdown?: SetStateAction<any>;
}

const SearchboxSelect: FC<SearchBtnType> = ({
  title,
  setSelected,
  setOpenDropdown,
}) => {
  const onClick = () => {
    setSelected(title);
    setOpenDropdown(false);
  };

  return (
    <li>
      <button
        onClick={onClick}
        type="button"
        className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {title}
      </button>
    </li>
  );
};

export default SearchboxSelect;
