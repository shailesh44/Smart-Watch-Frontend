import React from 'react'

import Sidebar from '../Sidebar';
import HomeHeader from '../HomeHeader';
import NavbarManage from '../NavbarManage';
import AlertsItem from './AlertsItem';


export default function Alerts() {

    return (

        <>
        <HomeHeader />
        <div><NavbarManage/></div>
            <div className='d-flex '>
        <Sidebar/>
           
            <br />   
            <div className='align-self-start'>
            <div className='d-flex justify-content-flex-start'>
                <AlertsItem/>
              
            </div> 

            
                
            </div></div>
        </>
    )
}