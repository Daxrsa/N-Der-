import { Button, FormControlLabel, Typography } from '@mui/material';
import { Grid, Paper,Avatar, TextField, Checkbox } from '@material-ui/core';
import { LocalPostOfficeRounded } from '@material-ui/icons';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './registerRestaurant.css';

export default function RegisterRestaurant() {
/*
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phonenumber,setPhoneNumber] = useState("");
    const[password,setPassword] = useState("");
    const[address,setAddress] = useState("");

    async function register(){
    
        let registerObject = {name,email,phonenumber,password,address};
        console.warn(registerObject);
    
        let result = await fetch('https://localhost:7005/api/Auth/registerRestaurant',{
              method : 'POST',
              body:JSON.stringify(registerObject),
              headers:{
                "Accept":'application/json',
                "Content-Type":'application/json'
              }
          })
          result = await result.json()
          console.warn("result",result)
          localStorage.setItem("my top secret key",JSON.stringify(result))
    
        }
        
      */
        const paperStyle = {padding:'20px 10px',width:400,margin:"15px auto"}
        const headerStyle = {margin:0}
        const avatarStyle = {backgroundColor:'#ff471a'}
  return (
    <Grid>
    <Paper elevation={20} style={paperStyle}>
      <Grid align='center'>
        <Avatar style={avatarStyle}>
          <LocalPostOfficeRounded/>
        </Avatar>
        <h2 style={headerStyle}>Build your career, starting now</h2>
        <Typography variant='caption'>Your business details will be reviewed by us</Typography>
      </Grid>
      <form>
         <TextField label="The Restaurant Name" placeholder='Enter name...'/>
         <TextField label='Email' placeholder='Your business email...'/>
         <TextField label='Phone Number' placeholder='Enter your phone number...'/>
         <TextField label='Personal Number' placeholder='Enter your personal number...'/>
         <TextField label='Password' placeholder='Enter your password...'/>
         <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
         <FormControlLabel control={<Checkbox name="terms" />} label="I Accept the Terms and Conditions"/>
      </form>
    </Paper>
  </Grid>
    /*
    <section >
    <div className="register">
      <div className="col-1">
        <form id="form" className='flex flex-col' >
          <h1>Become a Partner</h1>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' name="name" />
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' name="email"/>
          <input type='number' value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' name='phonenumber'/>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' name="password"/>
          <input type='number' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Personal Number' name='nrpersonal'/>
          <Button type='submit' onClick={register} className='btn btn-primary'>Register</Button> 
        </form>
        <p>Already have an account?</p>
        <NavLink to={'/login'}>Log In instead</NavLink>
      </div>
    </div>
    </section>
     */
  )
}

