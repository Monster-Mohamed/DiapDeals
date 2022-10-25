import React, { useState } from "react";

const SearchInput: React.FC<any> = (props) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-full">
      <input
        type="search"
        autoComplete="false"
        id="search-dropdown"
        className="block text-md p-2.5 w-full z-20 text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
        {...props}
        required={true}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <button
        type="submit"
        className={`absolute top-0 right-0 p-2.5 text-sm font-medium md:block hidden ${
          focused
            ? "text-white bg-blue-500 border border-blue-700"
            : "text-black"
        }  rounded-r-lg hover:border hover:text-white hover:border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300`}
      >
        <svg
          aria-hidden="true"
          className="w-6 h-6 md:block hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
};

export default SearchInput;
