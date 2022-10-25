import React, { FC, HTMLAttributes, useState } from "react";
import Dropdown from "../Dropdown";
import DropdownMenu from "../Dropdown/DropdownMenu";
import FormSearch from "../FormSearch";
import SearchboxSelect from "./SearchboxSelect";
import SearchInput from "./SearchInput";

const Searchbox: FC<HTMLAttributes<HTMLElement>> = (props) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selected, setSelected] = useState("Online Deals");

  return (
    <FormSearch {...props}>
      {/* Dropdown Menu Button */}
      <Dropdown
        selected={selected}
        setOpenDropdown={setOpenDropdown}
        openDropdown={openDropdown}
      />
      {/* Dropdown Menu */}
      <DropdownMenu openDropdown={openDropdown}>
        <SearchboxSelect
          title="Online Deals"
          setSelected={setSelected}
          setOpenDropdown={setOpenDropdown}
        />
        <SearchboxSelect
          title="Local Deals"
          setSelected={setSelected}
          setOpenDropdown={setOpenDropdown}
        />
        <SearchboxSelect
          title="Olx Section"
          setSelected={setSelected}
          setOpenDropdown={setOpenDropdown}
        />
      </DropdownMenu>
      {/* Search Input */}
      <SearchInput placeholder={props.placeholder} />
    </FormSearch>
  );
};

export default Searchbox;
