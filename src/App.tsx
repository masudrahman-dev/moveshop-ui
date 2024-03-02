import Collapsible from "react-collapsible";
import Home from "./domain/home";
import Header from "./domain/layout/header";
import SidebarLeft from "./domain/layout/sidebar-left";

const App = () => {
  return (
    <div className="">
      <Header />

      <main>
        <div className="flex gap-3">
          <SidebarLeft />

          <div className="w-full border p-3">home</div>
        </div>
      </main>
    </div>
  );
};

export default App;
