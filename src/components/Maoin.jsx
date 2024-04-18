import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Maoin = () => {
    var data=[{name:"athul",age:20,place:"apm"},
{name:"ayu",age:34,place:"korat"},
];

  return (
    <div>
     <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>age</TableCell>
                    <TableCell>place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((val,i)=>{
                    return<TableRow>
                        <TableCell key={i}>
                            {val.name}</TableCell>
                            <TableCell key={i}>
                            {val.age}
                        </TableCell>
                        <TableCell key={i}>
                            {val.place}
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
     </TableContainer>
    </div>
  )
}

export default Maoin
