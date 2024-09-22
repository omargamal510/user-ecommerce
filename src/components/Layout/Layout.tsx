import { Outlet as RouterOutlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex gap-6 h-full">
        <SideBar />
        <div className="flex-1  md:ml-72 mt-16">
          <RouterOutlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
