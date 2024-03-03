import React, { useState } from "react";
import SidebarLeft from "../../components/organisms/sidebar-left";
import Navbar from "../../components/organisms/navbar";
import { clx } from "../../utils/clx";

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar onToggle={onToggle} />

      <div className="flex h-screen overflow-hidden bg-gray-100">
        <SidebarLeft className={clx("hidden md:block", { block: isOpen })} />

        <div className="flex flex-col flex-1 w-0 overflow-hidden">
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
    </div>
  );
};

export default Layout;
