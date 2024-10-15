import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import Nav from './Nav'

const Login = () => {
  return (
    <>
    <Nav/>
    <div className="wrapper"> <br/><br/>
    
    <h2>LOGIN PAGE
    </h2>
        <TextField label="Email" variant='outlined'/><br/> <br/>
        <TextField label="Password" type='password' variant="outlined"/><br/> <br/>
        <div className='Remember-password'>
          <label><input type="checkbox"/>Remember Me</label>&nbsp;&nbsp;
          <a href='#'>Forgot Password</a><br/>
         
          <p>Do You Have An Account? <Link to='/signup'><a href='#'>Signup</a></Link></p>
          </div><br/><br/>
          <Link to='/db'>
        <Button variant="contained">Login</Button><br/><br/></Link>
        
    </div>
    </>
  )
}

export default Login