import React from 'react'

import NavbarMonitor from '../NavbarMonitor';

import Sidebar from '../Sidebar';
import HomeHeader from '../HomeHeader';
import DevicesComp from './DevicesComp';


export default function Devices() {

    return (

        <>
        <HomeHeader />
        <div><NavbarMonitor/></div>
            <div className='d-flex '>
        <Sidebar/>
           
            <br />   
           
            <div className='devices'>
              <DevicesComp/>
            </div> 

            </div>
        </>
    )
}