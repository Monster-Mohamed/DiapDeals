import React from "react";

interface Search {
  children?: React.ReactNode;
  [props: string]: any;
}

const FormSearch: React.FC<Search> = ({ children, ...props }) => {
  return (
    <form {...props}>
      <div className="flex relative md:mb-0 mb-4">{children}</div>
    </form>
  );
};

export default FormSearch;
