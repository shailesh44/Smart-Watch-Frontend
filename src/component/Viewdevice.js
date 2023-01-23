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


export default function Viewdevice() {
    const [data,setData]=useState([])
    const {t}=useTranslation();

useEffect(()=>{
  getDataall();
},[]);


      const getDataall =  async()=>{
        try {

          const ids = localStorage.getItem('deviceid')

        
          const res = await axios.post(myConfig.Apiurl +'/device/deviceDetails',{
            deviceID: ids
            }, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
            console.log("res========",res)
            setData(res.data.data)       
        } catch (error) {
            console.log("err",error)
        }
      }
      console.log("dataq",data)
    return (
    <>
    <HomeHeader/>
     <div className="d-flex justify-content-start">
        <Sidebar />
        <div className="lifeline">
        <div style={{textAlign:"center" }}>
            <h1>{t('devicedata')}</h1>
        </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
      
            
            <TableCell align="center">{t('deviceid')}</TableCell>
            <TableCell align="center">{t('heart')}</TableCell>
            <TableCell align="center">{t('latitude')}</TableCell>
            <TableCell align="center">{t('longitude')}</TableCell>
            <TableCell align="center">{t('location')}</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="center">{row.deviceID}</TableCell>
              <TableCell align="center">{row.heartRate}</TableCell>
              <TableCell align="center">{row.latitude}</TableCell>
              <TableCell align="center">{row.longitude}</TableCell>
              <TableCell align="center">{row.location}</TableCell>
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
