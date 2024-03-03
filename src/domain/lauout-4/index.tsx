import React, { useState } from "react";
import Navbar from "../../components/organisms/navbar";
import SidebarLeft from "../../components/organisms/sidebar-left";
import { clx } from "../../utils/clx";
import { PlayMiniSolid } from "@medusajs/icons";

const Layout4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-slate-400 fixed w-full top-0 z-50">
        <Navbar onToggle={onToggle} />
      </div>

      <div>
        <div>
          <aside
            className={clx(
              "fixed top-0 px-1  left-0 z-40 w-64 h-screen bg-white overflow-y-auto pt-14 transition-transform -translate-x-full  border-r md:translate-x-0",
              {
                "translate-x-0": isOpen,
              }
            )}
          >
            <SidebarLeft />
          </aside>
          <div className={clx("mt-16 md:ml-64 ml-0")}>
            <div className="grid grid-cols-1 md:grid-cols-12 justify-items-center">
              <div className="md:col-span-9">
                <p>Main Content</p>

                {[...Array(30)]?.map((_, i) => {
                  return (
                    <p key={i}>
                      <a href="#" className="block p-4 hover:bg-gray-300">
                        item {i}
                      </a>
                    </p>
                  );
                })}
              </div>
              <div className="md:col-span-3 border w-full text-center  ">
                <h1 className="text-2xl font-semibold">Right Sidebar</h1>

                <div className="relative  p-2 flex items-center justify-center group/video">
                  <div>
                    <img
                      className="rounded-lg "
                      src="https://picsum.photos/300/300"
                      alt=""
                    />

                    <button className="outline group-hover/video:text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full flex flex-col items-center justify-center ">
                      <PlayMiniSolid />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout4;
