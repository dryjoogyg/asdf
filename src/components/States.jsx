import { Typography,Button } from '@mui/material'
import React, { useState } from 'react'

const States = () => {
    var [name,setName]=useState("athul")
    const changeName=()=>{
        console.log("btn clicked");
        setName("peter")
    }
  return (
    <div>
      <Typography variant='h4'>my name is {name}</Typography>
      <Button variant ='contained' onClick={changeName}>change</Button>

    </div>
  )
}

export default States
