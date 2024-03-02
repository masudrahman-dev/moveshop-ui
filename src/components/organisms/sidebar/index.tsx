import React from "react";

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

export default Sidebar;
