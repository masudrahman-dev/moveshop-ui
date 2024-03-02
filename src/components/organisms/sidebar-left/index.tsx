import SidebarLeftBottom from "./sidebar-left-bottom";
import SidebarLeftMiddle from "./sidebar-left-middle";
import SidebarLeftTop from "./sidebar-left-top";

const SidebarLeft = () => {
  return (
    <div className="w-80 bg-gray-50  overflow-y-auto lg:block">
      <div className=" w-72 p-3 h-full flex flex-col gap-3">
        <SidebarLeftTop />
        <SidebarLeftMiddle />
        <SidebarLeftBottom />
      </div>
    </div>
  );
};

export default SidebarLeft;
