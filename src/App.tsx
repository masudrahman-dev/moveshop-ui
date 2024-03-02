// Sidebar.tsx

import React from "react";
import SidebarLeft from "./domain/layout/sidebar-left";

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

const Sidebar: React.FC = () => {
  return (
    <aside className=" w-64 bg-gray-800 text-gray-300 overflow-y-auto lg:block">
      <div className="p-4">
        <span className="text-xl font-bold">Admin Dashboard</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <a href="#" className="block p-4 hover:bg-gray-700">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block p-4 hover:bg-gray-700">
              Users
            </a>
          </li>
          <li>
            <a href="#" className="block p-4 hover:bg-gray-700">
              Settings
            </a>
          </li>

          {[...Array(20)]?.map(() => {
            return (
              <li>
                <a href="#" className="block p-4 hover:bg-gray-700">
                  Settings
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <footer className="p-4 text-xs">&copy; 2024 Admin Dashboard</footer>
    </aside>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <SidebarLeft />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <Navbar />
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Your page content goes here */}
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <p>Welcome to the admin dashboard.</p>

              {[...Array(230)]?.map(() => {
            return (
              <li>
                <a href="#" className="block p-4 hover:bg-gray-700">
                  Settings
                </a>
              </li>
            );
          })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
