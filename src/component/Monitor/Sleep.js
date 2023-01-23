import React from 'react'
import { UserData } from '../data/data';
import BarChart from '../data/BarChart';
import NavbarMonitor from '../NavbarMonitor';
import CardMonitor from '../CardMonitor.';
import Sidebar from "../Sidebar";
import { useState } from 'react';
import HomeHeader from '../HomeHeader';
export default function Sleep (){

    const [userData] = useState({
        labels: UserData.map((data) => data.day),
        datasets: [{
            label: "temperature",
            data: UserData.map((data) => data.temperature),
        }]
    })
    return (

        <>
        <HomeHeader />
        <div ><NavbarMonitor/></div>
             <div className='d-flex '>
        <Sidebar/>
           
            <br />   
            <div className='align-self-center'>
            <div className='d-flex justify-content-space-around'>
                
                <CardMonitor header="i am header" title="title" text="i am text" />
                <CardMonitor /><CardMonitor />
            </div> 

            <div className='d-flex justify-content-center'>
                
                <div style={{ width: '40vw', margin: '30px' }}>
                    <BarChart chartData={userData} />
                </div>
            </div>
          
                
            </div></div>
        </>
    )
}