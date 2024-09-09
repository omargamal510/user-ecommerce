// Outlet.js
import React from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const Outlet = ({ children }: any) => {
  return (
    // <div className="flex">
    //   <SideBar />
    //   <div className="flex-1">
    //     <Navbar />
    //     <main>{children}</main>
    //   </div>
    // </div>

    <div className="px-5 h-screen  flex flex-col">
      <Navbar />
      <main className="flex gap-6 h-full">
        <SideBar />
        {children}
      </main>
    </div>
  );
};

export default Outlet;
