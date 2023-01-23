import React from "react";
import HomeHeader from "./HomeHeader";
import NavbarManage from "./NavbarManage";

import Sidebar from "./Sidebar";

export default function Manage(){

    return (
        <>
       <HomeHeader/>
       <div><NavbarManage /></div>
          <div className="d-flex justify-content-start">
        <Sidebar />
       
        </div>
        </>
    )
}