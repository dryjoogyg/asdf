import { Button,  Typography } from '@mui/material'
import React, { useState } from 'react'

const Ath = () => {
  var[input,setName]=useState()
  
  const changeName=(e)=>{
    setName("welcome to gallery")
  }
  const addName=()=>{
    setName("welcome to home")
  }
  const inputHandler=()=>{
    setName("welcome to contact us")
  }
  return (
    <div style={{margin:'5%'}}>
    <Typography variant='h4'>{input}</Typography>
    
    <Button variant='contained' onClick={changeName} color={'primary'}>gallery</Button> 
    <Button variant='contained' onClick={addName}>home</Button> 
    <Button variant='contained' onClick={inputHandler}>contact us</Button> 
      
    </div>
  )
}

export default Ath
