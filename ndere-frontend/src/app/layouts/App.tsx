import Menu from '../../Menu';
import './../../styles/App.scss';
import './../../styles/Reset.css';
import './../../styles/Components.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import routes from '../../route-config';
import {Footer,Blog,Possibility,Featuresss,WhatNDere,Header} from '../../containers';
import {Brand,Navbar} from '../../components';
import React from 'react';
import Hero from '../../MainComponents/Hero';
import Clients from '../../MainComponents/Clients';
import Foods from '../../MainComponents/Foods';
import Restaurants from '../../MainComponents/Restaurants';
import Deliverers from '../../MainComponents/Deliverers';
import MyCart from '../../MainComponents/MyCart';
import RegisterClient from '../../components/registerClient/RegisterClient';
import Login from '../../components/login/login';
import RegisterDasher from '../../components/registerDasher/RegisterDasher';
import RegisterRestaurant from '../../components/registerRestaurant/RegisterRestaurant';
import AboutUs from '../../components/aboutUs/aboutus';
import AboutUsCRUD from '../../MainComponents/AboutUsCRUD';



function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/clients" element={<Clients/>}/>
            <Route path="/foods" element={<Foods/>}/>
            <Route path="/restaurants" element={<Restaurants/>}/>
            <Route path="/deliverers" element={<Deliverers/>}/>
            <Route path="/mycart" element={<MyCart/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/aboutCrud" element={<AboutUsCRUD/>}/>
            <Route path="/registerClient" element={<RegisterClient/>}/>
            <Route path="/registerDasher" element={<RegisterDasher/>}/>
            <Route path="/registerRestaurant" element={<RegisterRestaurant/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

