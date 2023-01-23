import React from "react";
import HomeHeader from "./HomeHeader";
import Sidebar from "./Sidebar";
import UserTable from "./UserTable";
import Usertabley from "./Usertabley";

export default function Users(){

    return (
     
        <>
        <HomeHeader/>
         <div className="d-flex justify-content-start">
            <Sidebar />
            <div className="lifeline">
            <Usertabley/>
         
            
            
            </div>
            </div>
        </>
    )
}