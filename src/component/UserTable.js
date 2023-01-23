import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {  Button } from '@mui/material';
import Box from'@mui/material/Box'

const handleClickview=(event,cellValue)=>{
 
  console.log("cellvalue",cellValue)
  localStorage.setItem("iduser",cellValue.row.id)
  if(cellValue){
    window.location.replace("/Users/View")
    console.log(cellValue)
   
  }
}
const handleClickedit=(event,cellValue)=>{
 
  console.log("cellvalue",cellValue)
  localStorage.setItem("firstname",cellValue.row.firstName)
  localStorage.setItem("lastname",cellValue.row.lastName)
  localStorage.setItem("phone",cellValue.row.phone)
  if(cellValue){
    window.location.replace("/Users/Edit")
    console.log(cellValue)
   
  }
}
const handleClickdelete=(event,cellValue)=>{
 
  console.log("cellvalue",cellValue)
  localStorage.setItem("iduser",cellValue.row.id)
  if(cellValue){
    window.location.replace("/Users/View")
    console.log(cellValue)
    //redirect();
  }
}

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
 {
    field: 'firstName',
    headerName: 'FirstName',
    type: 'text',
    width: 100,
  },{
    field: 'lastName',
    headerName: 'LastName',
    type: 'number',
    width: 100,
  }
  ,{
    field: 'devices',
    headerName: 'Devices',
    type: 'number',
    width: 100,
  },{
    field: 'phone',
    headerName: 'Phone number',
    type: 'number',
    width: 150,
  },
  {
    field: 'reg',
    headerName: 'Registration Date',
    type: 'number',
    width: 150,
  },
  {
field:"view",
renderCell:(cellValue)=>{
 
  return(
    
   // <NavLink to={"/Users/View"}>View
    <Button
    varient="contained"
    color='primary'
    onClick={(event)=>{
      handleClickview(event,cellValue)
      
    }}
    >view</Button>
 // </NavLink>
  );
}
  },
  {
    field:"Edit",
    renderCell:(cellValue)=>{
      return(
        <Button
        varient="contained"
        color='primary'
        onClick={(event)=>{
          handleClickedit(event,cellValue)
        }}
        >Edit</Button>
      );
    }
      },
      {
        field:"Delete",
        renderCell:(cellValue)=>{
          return(
            <Button
            varient="contained"
            color='primary'
            onClick={(event)=>{
              handleClickdelete(event,cellValue)
            }}
            >Delete</Button>
          );
        }
          },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', devices: 35 ,phone:"4578587458",reg:"20/20/23"},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', devices: 42 ,phone:"4578587458",reg:"20/20/23"},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', devices: 45 ,phone:"4578587458",reg:"20/20/23"},
  { id: 4, lastName: 'Stark', firstName: 'Arya', devices: 16 ,phone:"4578587458",reg:"20/20/23"},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', devices:7 ,phone:"4578587458",reg:"20/20/23"},
  { id: 6, lastName: 'Melisandre', firstName: null, devices:150 ,phone:"4578587458",reg:"20/20/23"},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', devices: 44 ,phone:"4578587458",reg:"20/20/23"},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', devices: 36 ,phone:"4578587458",reg:"20/20/23"},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', devices: 65 ,phone:"4578587458",reg:"20/20/23"},
];

export default function UserTable() {

  return (
    <Box sx={{ height: '80vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
     
        rowsPerPageOptions={[8]}
     
      />
     
    </Box>

  );
}

