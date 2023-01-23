import React, { Suspense } from "react";
import Suggestion from "./Suggestion";
import Sidebar from "./Sidebar";
import HomeHeader from "./HomeHeader";

export default function Help(){

    return (
        <>
        <HomeHeader/>
         <div className="d-flex justify-content-start">
        <Sidebar />
        <Suggestion />
       
        </div>
        </>
    )
}