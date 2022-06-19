import React from 'react';
import './navbar.css';
import logo from '../../../src/assets/logo.svg';
import { BrowserRouter, NavLink, Routes } from 'react-router-dom';
import '../../styles/Components.scss';
import '../../styles/table.css';
import '../../styles/Reset.css';


const NavItems = () => (   
  <ul>
  <li><NavLink to="/" >Home</NavLink></li>
  <li><NavLink to="/foods">Foods</NavLink></li>
  <li><NavLink to="/clients">Clients</NavLink></li>
  <li><NavLink to="/restaurants">Restaurants</NavLink></li>
  <li><NavLink to="/deliverers">Dashers</NavLink></li>
  <li><NavLink to="/mycart">My Cart</NavLink></li>
  <li><NavLink to="/registerDasher">Become a Deliverer</NavLink></li>
  <li><NavLink to="/registerRestaurant">Become a Partner</NavLink></li>
  <li><NavLink to="/registerClient">Sign Up</NavLink></li>
</ul>
)

const Navbar = () => {
  return (
    <div className="ndere__navbar">
      <div className='ndere__navbar-links'>
        <div className='ndere__navbar-links_logo'>
        <img src={logo} alt="logo" width="130px" height="130px" />
        </div>
        <div className='ndere_navbar-links_container'>
          <NavItems />
        </div>
        <div className="ndere__navbar-sign">
        <button type="button"><NavLink to="/login">Log In</NavLink></button>
        </div>
        </div>
      </div>
  )
}

export default Navbar

