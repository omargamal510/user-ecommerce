// Outlet.js
import React from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const Outlet = ({ children }: any) => {
  return (
    <div className=" h-screen  flex flex-col">
      <Navbar />
      <main className="flex gap-6 h-full">
        <SideBar />
        {children}
      </main>
    </div>
  );
};

export default Outlet;
