import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width: 190,
  },

];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', status: 'online'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', status: 'offline' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', status:'offline '},
  { id: 4, lastName: 'Stark', firstName: 'Arya', status: 'online' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', status: 'online '},
  { id: 6, lastName: 'Melisandre', firstName: null, status: 'offline '},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', status: 'offline '},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', status: 'offline '},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', status: 'online '},
];

export default function DevicesComp() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}