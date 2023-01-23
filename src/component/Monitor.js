import React from "react";
import NavbarMonitor from "./NavbarMonitor";

import Sidebar from "./Sidebar";

export default function Monitor(){

    return (
        <>
        
         <div><NavbarMonitor /></div>
         <div className="d-flex justify-content-start">
        <Sidebar />
      
        </div>
       
        </>
    )
}