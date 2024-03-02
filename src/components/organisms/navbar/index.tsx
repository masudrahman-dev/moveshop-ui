import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow py-4 px-6 w-full flex justify-between items-center">
      <button className="text-gray-600 focus:outline-none lg:hidden">
        {/* Hamburger icon for mobile */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <span className="text-xl font-semibold">Welcome, Admin</span>
      {/* Add any additional elements for the navbar */}
    </header>
  );
};

export default Navbar;
