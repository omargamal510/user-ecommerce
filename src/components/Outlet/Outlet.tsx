import { Outlet as RouterOutlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const Outlet = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex gap-6 h-full">
        <SideBar />
        <div className="flex-1">
          <RouterOutlet />
        </div>
      </main>
    </div>
  );
};

export default Outlet;
