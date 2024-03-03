import { clx } from "../../../utils/clx";
import SidebarLeftBottom from "./sidebar-left-bottom";
import SidebarLeftMiddle from "./sidebar-left-middle";
import SidebarLeftTop from "./sidebar-left-top";

const SidebarLeft = ({ className }: { className?: string }) => {
  return (
    <div
      className={clx(
        "w-80 bg-gray-50  overflow-y-auto lg:block",
        className,
        {}
      )}
    >
      <div className=" w-72 p-3 h-full flex flex-col gap-3">
        <SidebarLeftTop />
        <SidebarLeftMiddle />
        <SidebarLeftBottom />
      </div>
    </div>
  );
};

export default SidebarLeft;
