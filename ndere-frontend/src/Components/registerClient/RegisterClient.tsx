
import React,{useState} from 'react'
import foodOnTable from '../../assets/foodOnTable.jpg';
import { NavLink } from 'react-router-dom';
import hamburger from '../../assets/hamburger.jpg';
import "./registerClient.css";
import { Button, FormControlLabel, Typography } from '@mui/material';
import { Grid, Paper,Avatar, TextField, Checkbox } from '@material-ui/core';
import registerClient from "../../images/register-client.jpg";
/* import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'; */


export default function RegisterClient(){

  /*const[name,setName] = useState("");
  const[surname,setSurName] = useState("");
  const[email,setEmail] = useState("");
  const[phonenumber,setPhoneNumber] = useState("");
  const[password,setPassword] = useState("");
  const[address,setAddress] = useState("");
  const[zipcode,setZipCode] = useState("");
  const[city,setCity] = useState("");

  async function register(){
    
    let registerObject = {name,surname,email,phonenumber,password,address,zipcode,city};
    console.warn(registerObject);

    let result = await fetch('https://localhost:7005/api/Klienti',{
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
  const headerStyle = {margin:0}
  const avatarStyle = {backgroundColor:'#ff471a'}
  //const mainGridStyle = {flexGrow:1} nuk po bon,
  return (
    <section className="register-client">
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper className="registration-form" elevation={20}>
              <div>
                <Avatar style={avatarStyle}>
                </Avatar>
                <h2 style={headerStyle}>Create Account</h2>
                <Typography variant='caption'>Please fill this form to create an account</Typography>
              </div>
              <form>
                <TextField label='Name' placeholder='Enter your name...'/>
                <TextField label='Surname' placeholder='Enter your surname...'/>
                <TextField label='Email' placeholder='Enter your email...'/>
                <TextField label='Phone Number' placeholder='Enter your phone number...'/>
                <TextField label='Password' placeholder='Enter your password...'/>
                <TextField label='Address' placeholder='Enter your address...'/>
                <TextField label='Zip Code' placeholder='Enter your zip code...'/>
                <TextField label='City' placeholder='Enter your city...'/>
                <div className="button-form">
                  <Button type='submit' variant='contained' color='primary' style={{backgroundColor: "#F24040"}}>Sign Up</Button>
                  <FormControlLabel control={<Checkbox name="terms" />} label="I Accept the Terms and Conditions"/>
                </div>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <img className="register-client_right" src={registerClient} alt="food" />
          </Grid>
        </Grid> 
      </div>
    </section>
    /*
    <section  style={{backgroundImage: `url(${foodOnTable})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
    <div className="register">
      <div className="col-1">
        <form id="form" className='flex flex-col' >
          <h1>Create Account</h1>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' name="name" />
          <input type='text' value={surname} onChange={(e) => setSurName(e.target.value)} placeholder='Surname' name="surname"/>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' name="email"/>
          <input type='number' value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' name='phonenumber'/>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' name="password"/>
          <input type='text' value={address} onChange={(e) => setAddress(e.target.value)}placeholder='Address' name='address'/>
          <input type='number' value={zipcode} onChange={(e) => setZipCode(e.target.value)} placeholder='Zip Code' name='zipcode'/>
          <input type='text' value={city} onChange={(e) => setCity(e.target.value)} placeholder='City' name='city'/>
          <Button type='submit' onClick={register} className='btn btn-primary'>Register</Button>
        </form>
        <p>Already have an account?</p>
        <NavLink to={'/login'}>Log In instead</NavLink>
      </div>
      <div>
      <img src={hamburger} alt='hamburger' width={650} height={450}/>
      </div>
    </div>
    </section>
    */
  )
}


