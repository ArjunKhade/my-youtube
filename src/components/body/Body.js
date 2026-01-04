import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "../header/Head";

const Body = () => {
  return (
    <div>
      <Head />
      <div className="flex">
        <Sidebar></Sidebar>
        <Outlet/>
      </div>
    </div>
  );
};

export default Body;
