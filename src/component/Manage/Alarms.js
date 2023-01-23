import React from 'react'

import Sidebar from '../Sidebar';
import HomeHeader from '../HomeHeader';
import NavbarManage from '../NavbarManage';
import AlarmComp from './AlarmComp';



export default function Alarms() {

    return (

        <>
        <HomeHeader />
        <div><NavbarManage/></div>
            <div className='d-flex '>
        <Sidebar/>
           
            <br />   
            <div className='align-self-start'>
            <div className='d-flex justify-content-flex-start'>
                <div className='ala'>
                <AlarmComp /></div>
            </div>                
            </div></div>
        </>
    )
}