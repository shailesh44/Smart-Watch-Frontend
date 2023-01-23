import React, { useState } from 'react'
import NavbarMonitor from '../NavbarMonitor';
import { UserData } from '../data/data';
import BarChart from '../data/BarChart';
import CardMonitor from '../CardMonitor.';
import Sidebar from '../Sidebar';
import HomeHeader from '../HomeHeader';
export default function Temperature (){
   
    const current =new Date();
    const date=`${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;
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
        <div><NavbarMonitor/></div>
               <div className='d-flex '>
        <Sidebar/>
           
            <br />   
            <div className='align-self-center'>
            <div className='d-flex justify-content-space-around'>
              
            <CardMonitor header={date} title="50 C" text="Minimum temperature in area" />
                <CardMonitor  header={date} title="20 C" text="Current temperature in area"/><CardMonitor  header={date} title="70 C" text="Maximum temperature in area"/>
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

















