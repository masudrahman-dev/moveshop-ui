import { clx } from "../../../utils/clx";
import SidebarLeftBottom from "./sidebar-left-bottom";
import SidebarLeftMiddle from "./sidebar-left-middle";
import SidebarLeftTop from "./sidebar-left-top";

const SidebarLeft = ({ className }: { className?: string }) => {
  return (
    <div className={clx("", className, {})}>
      <div className=" h-full flex flex-col gap-3">
        <SidebarLeftTop />
        <SidebarLeftMiddle />
        <SidebarLeftBottom />
      </div>
    </div>
  );
};

export default SidebarLeft;
