import { Box, Button, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import user_icon from '../assets/name (1).png'
import password_icon from '../assets/password.png'
import email_icon from '../assets/email.png'
import phone_icon from '../assets/phone.png'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import axios from 'axios'


const Signup = (props) => {
  var[inputs,setInputs] =useState({fullname: "", email: "", phone: "",password: "",qualification: ""})
   var[val,setVal]=useState()
   const handleInput = (e) => {
    console.log(e.target.value)
    setInputs(e.target.value)
   }
   const submitHandler = (e) => {
    console.log("clicked");
    setVal(inputs);
   }

  return (
    <>
    <Nav/>
   < div class="spage">
        <br></br> <br></br>
        <div class='sign'>
        <Typography variant='h6'>SIGNUP PAGE{val}</Typography>
        </div><br /><br />
        <div classname="input">
        <img src={user_icon} alt="" width="50" height="45"/> &nbsp;&nbsp;&nbsp;
        <TextField label="Full Name" variant="standard" onChange={handleInput}/><br/>
        </div>
        
        <div  classname="input">
        <img src={email_icon} alt="" width="45" height="40" />&nbsp;&nbsp;&nbsp;
        <TextField label="Email" variant="standard" onChange={handleInput}/><br/>
        </div>
        <div  classname="input">
        <img src={phone_icon} alt="" width="50" height="45"/>&nbsp;&nbsp;&nbsp;
        <TextField label="Phone Number" variant="standard" onChange={handleInput}/><br/>
        </div>
        <div  classname="input">
        <img src={password_icon} alt="" width="50" height="45" />&nbsp;&nbsp;&nbsp;
        <TextField label="Password" type="password" variant="standard" onChange={handleInput}/><br/>
        </div>
        {/* <div  classname="input">
        <img src={password_icon} alt="" width="50" height="45" />&nbsp;&nbsp;&nbsp;
        <TextField label="Re-enter Password" type="password" variant="standard" onChange={handleInput}/><br/><br/>
        </div> */}
        <div classname="input">
        {/* <label for="qualification">Qualification</label>
        <select name="qualification"> &nbsp;&nbsp;&nbsp;&nbsp;
        <option value="Select">Select</option>
          <option value="Plus Two">Plus Two</option>
          <option value="Degree ">Degree</option>
          <option value="Post Graduation">Post Graduation</option>
        // </select><br /><br/></div> */}
        <TextField label="Qualification"  variant="standard" onChange={handleInput}/><br/><br/>
        </div>
        <div>
        <Link to="/login">
        <Button variant="contained" onClick={submitHandler}>SIGNUP</Button></Link><br/><br></br>

        </div>
      
     
    </div>
    </>
  )
}

export default Signup