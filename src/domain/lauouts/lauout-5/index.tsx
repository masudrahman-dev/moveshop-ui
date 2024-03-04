import React, { useState } from "react";

import { PlayMiniSolid } from "@medusajs/icons";
import Navbar from "../../../components/organisms/navbar";
import { clx } from "../../../utils/clx";
import SidebarLeft from "../../../components/organisms/sidebar-left";

const Layout5 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-slate-400 fixed w-full top-0 z-50">
        <Navbar onToggle={onToggle} />
      </div>

      <>
        <div className="flex gap-6">
          <div className="relative w-64">
            <aside
              className={clx(
                "h-screen fixed top-0 overflow-y-scroll  px-1 w-64  bg-white  pt-14 transition-transform -translate-x-full  border-r md:translate-x-0",
                {
                  "translate-x-0": isOpen,
                }
              )}
            >
              <SidebarLeft />
            </aside>
          </div>
          <div className="grid w-full bg-slate-200 border grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-8">
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
            <div className="md:col-span-4 bg-slate-500 w-full text-center  ">
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
      </>
    </div>
  );
};

export default Layout5;
