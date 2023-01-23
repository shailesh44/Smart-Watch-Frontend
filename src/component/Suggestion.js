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


export default function Suggestion() {
    const [data,setData]=useState([])
    const {t}=useTranslation();

useEffect(()=>{
  getData();
},[]);


      const getData =  async()=>{
        try {
          const res = await axios.get(myConfig.Apiurl + '/help/findHelpSupportData')
          setData(res.data.user.data)
            console.log("reshelp",res.data.user.data)
                 
        } catch (error) {
            
        }
      }
    return (
    <>
  
 
        <div className="lifeline">
        <div style={{textAlign:"center" }}>
            <h1>{t('help')}</h1>
        </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
      
            <TableCell align="center">{t('name')}</TableCell>
            <TableCell align="center">{t('email')}</TableCell>
            <TableCell align="center">{t('phone')}</TableCell>
            <TableCell align="center">{t('date')}</TableCell>
            <TableCell align="center">{t('query')}</TableCell>
            <TableCell align="center">{t('resolved')}</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.phonenumber}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phonenumber}</TableCell>
              <TableCell align="center">{row.registeredOn}</TableCell>
              <TableCell align="center">{row.query}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
        
    </>
  );
}
