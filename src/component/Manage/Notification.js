import React from 'react'

import Sidebar from '../Sidebar';
import HomeHeader from '../HomeHeader';
import NavbarManage from '../NavbarManage';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function Notification() {

    return (

        <>
            <HomeHeader />
            <div><NavbarManage /></div>
            <div className='d-flex '>
                <Sidebar />

                <br />
                <div className='align-self-start'>
                    <div className='d-flex justify-content-flex-start'>
                        <div className='notification'>
                            <Alert severity="info">
                                <AlertTitle>Info</AlertTitle>
                                This is an info alert — <strong>check it out!</strong>
                            </Alert></div>
                    </div>


                </div></div>
        </>
    )
}