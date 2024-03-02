import React from "react";

const Layout2 = () => {
  return (
    <div>
      <div className="flex h-screen overflow-hidden bg-gray-100">
        <div className="w-80 bg-gray-50 border  overflow-y-auto lg:block">
          <div className=" w-72 h-full flex flex-col gap-3 ">
            {[...Array(10)]?.map((_, i) => {
              return (
                <p>
                  <a href="#" className="block p-4 hover:bg-gray-300">
                    Item {i}
                  </a>
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col flex-1 w-0 overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Your page content goes here */}
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <p>Welcome to the admin dashboard.</p>

                {[...Array(30)]?.map((_, i) => {
                  return (
                    <p>
                      <a href="#" className="block p-4 hover:bg-gray-300">
                        item {i}
                      </a>
                    </p>
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

export default Layout2;
