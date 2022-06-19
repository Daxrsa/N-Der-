
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, FormControlLabel, Typography } from '@mui/material';
import { Grid, Paper,Avatar, TextField, Checkbox } from '@material-ui/core';
import { LocalPostOfficeRounded } from '@material-ui/icons';

export default function RegisterDasher() {
  /*
  const[name,setName] = useState("");
  const[surname,setSurName] = useState("");
  const[email,setEmail] = useState("");
  const[phonenumber,setPhoneNumber] = useState("");
  const[password,setPassword] = useState("");
  const[streetname,setStreetName] = useState("");
  const[zipcode,setZipCode] = useState("");
  const[nrpersonal,setNrPersonal] = useState("");
  const[city,setCity] = useState("");

  async function register(){
    let registerObject = {name,surname,email,phonenumber,password,streetname,nrpersonal,zipcode,city};
    console.warn(registerObject);

    let result = await fetch('https://localhost:7005/api/Deliverer',{
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
        <h2 style={headerStyle}>Start Earning,Today</h2>
        <Typography variant='caption'>Your information will be reviewed by us</Typography>
      </Grid>
      <form>
         <TextField label='Name' placeholder='Enter your name...'/>
         <TextField label='Surname' placeholder='Enter your surname...'/>
         <TextField label='Email' placeholder='Enter your email...'/>
         <TextField label='Phone Number' placeholder='Enter your phone number...'/>
         <TextField label='Password' placeholder='Enter your password...'/>
         <TextField label='Street' placeholder='Enter your street name...'/>
         <TextField label='Zip Code' placeholder='Enter your zip code...'/>
         <TextField label='City' placeholder='Enter your city...'/>
         <TextField label='Personal Number' placeholder='Enter your personal number...'/>
         <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
         <FormControlLabel control={<Checkbox name="terms" />} label="I Accept the Terms and Conditions"/>
      </form>
    </Paper>
  </Grid>

    /*
    <div>
    <section >
    <div className="register">
      <div className="col-1">
        <form id="form" className='flex flex-col' >
          <h1>Start Earning Today</h1>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' name="name" />
          <input type='text' value={surname} onChange={(e) => setSurName(e.target.value)} placeholder='Surname' name="surname"/>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' name="email"/>
          <input type='number' value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' name='phonenumber'/>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' name="password"/>
          <input type='text' value={streetname} onChange={(e) => setStreetName(e.target.value)}placeholder='Address' name='address'/>
          <input type='number' value={nrpersonal} onChange={(e) => setNrPersonal(e.target.value)} placeholder='Personal Number' name='nrpersonal'/>
          <input type='number' value={zipcode} onChange={(e) => setZipCode(e.target.value)} placeholder='Zip Code' name='zipcode'/>
          <input type='text' value={city} onChange={(e) => setCity(e.target.value)} placeholder='City' name='city'/>
          <Button type='submit' onClick={register} className='btn btn-primary'>Register</Button> 
        </form>
        <p>Already have an account?</p>
        <NavLink to={'/login'}>Log In instead</NavLink>
      </div>
    </div>
    </section>
    </div>
    */
  )
  
}
