import React from 'react'
import NavBar from './NavBar'
import { Table } from '@mui/material';

const ManageJob = () => {
  const data = [
    // { id: 1, name: "John Doe", age: 28 },
    // { id: 2, name: "Jane Smith", age: 34 },
    // { id: 3, name: "Sam Johnson", age: 22 },
  ];

  return (
    <>
    <NavBar/>
    <br /><br /><br /><br />
    <div className='joblisting'>
    <Table border="5" sx={{minWidth:1200}} align="center">
      <thead>
        <tr>
          <th  >Job Title</th>
          <th>Description</th>
          <th>Requirments</th>
          <th>Location</th>
          <th>Salary</th>
          <th>Job Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
          </tr>
          
        ))}
        
      </tbody>
    </Table>
    </div>
    </>
  );
};
  


  

export default ManageJob