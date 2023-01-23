import * as React from 'react';
import { useEffect ,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HomeHeader from "./HomeHeader";
import Sidebar from "./Sidebar";
import { myConfig } from './config';
import axios from 'axios';
import { useTranslation } from "react-i18next"
import i18next from "i18next";

import { useNavigate } from "react-router-dom";

export default function Viewtable() {
    const [data,setData]=useState([])
    const {t}=useTranslation();

    const navigate = useNavigate();

useEffect(()=>{
  getData();
},[]);


const handleclick = (event, row) => {


 
}

      const getData =  async()=>{
        try {

          const id = localStorage.getItem('iduser')
        
          const res = await axios.post(myConfig.Apiurl +'/device/findAllDevice',{
              userid: id
             
            }, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
           
            setData(res.data.data)       
         console.log("view",res.data.data)
        } catch (error) {
            
        }
      }
 
      const handleClick = () => {
      
       

       
    }


 
    return (
    <>
    <HomeHeader/>
     <div className="d-flex justify-content-start">
        <Sidebar />
        <div className="lifeline">
        <div style={{textAlign:"center" }}>
            <h1>{t('device')}</h1>
        </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">{t('userid')}</TableCell>
            <TableCell align="center">{t('deviceid')}</TableCell>
            <TableCell align="center">{t('imei')}</TableCell>
            <TableCell align="center">{t('watchregistered')}</TableCell>
            <TableCell align="center">{t('status')}</TableCell>
            <TableCell align="center">{t('action')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
            
              <TableCell align="center">{row.userid}</TableCell>
              <TableCell align="center">{row.deviceID}</TableCell>
              <TableCell align="center">{row.IEMI}</TableCell>
              <TableCell align="center">{row.registeredOn}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">
                <button
                 className="btn btn-outline-primary"
                 variant="contained"
                 
                  onClick={async(event) => {
                    console.log("row",row)
                  
                   await localStorage.setItem("deviceid",row.deviceID)
                    console.log("deviceid",row.deviceID)
                  
                    if (row) {
                      navigate("/Users/View/device")
                  
                    }
                  }}
                >
                  View
                </button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
        </div>
    </>
  );
}
