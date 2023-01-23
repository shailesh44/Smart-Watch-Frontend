import React from 'react'

import Sidebar from '../Sidebar';
import HomeHeader from '../HomeHeader';
import NavbarManage from '../NavbarManage';



export default function Sos() {

    return (

        <>
        <HomeHeader />
        <div><NavbarManage/></div>
            <div className='d-flex '>
        <Sidebar/>
           
            <br />   
            <div className='align-self-center'>
            <div className='d-flex justify-content-space-around'>
                
           
            </div> 

            
                
            </div></div>
        </>
    )
}