import React from 'react'
import './whatNDere.css';
import deliveryGuy from '../../assets/deliveryGuy.jpg';
import restaurant from  '../../assets/restaurant.jpg';
import { BrowserRouter, NavLink, Routes } from 'react-router-dom';
import { Button } from '@mui/material';


export default function WhatNDere() {
  return (
    <div className="wrapper">
    <div className='card 1'>
      <Card img={deliveryGuy}
      title="Become a Deliverer"
      desc="Sign Up To Start Earning Today!"
      />
      <NavLink to='/registerDasher'>SIGN UP NOW</NavLink>
    </div>

    <div className='card 2'>
<Card img={restaurant}
      title="Become a Partner"
      desc="Build Your Career!" 
      />
      <NavLink to='/registerRestaurant'>SIGN UP NOW</NavLink>
    </div>
    </div>
    /*
    <div className='cards'>
      <div>
      <img src={deliveryGuy} alt='deliverer' width={400} height={450}/>
      <h1>Become a Deliverer</h1>
      <p>As a delivery driver you will make reliable money - working from anywhere</p>
     <NavLink to="/login">Start Earning</NavLink>
      </div>
      <div>
      <img src={restaurant} alt='restaurant' width={400} height={450} />
      <h1>Become a Partner</h1>
      <p>As a restaurant, you will be able to grow your business.</p>
      <NavLink to="/login">Sign Up Here</NavLink>
      </div>
    </div>
    */
  )
}
function Card(props){
  return(
  <div className='card'>
  <div className="card__body">
   <img src={props.img} height={400} width={400}/>
   <h2 className="card__title">{props.title}</h2>
     <p className="card__desc">
        {props.desc}
     </p>
  </div>
</div>
  )
}

