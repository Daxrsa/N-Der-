import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import {Footer,Blog,Possibility,Featuresss,WhatNDere,Header} from './containers';
import {Brand,Navbar} from './components';
import Login from './components/login/login';
import RegisterClient from './components/registerClient/RegisterClient';
import RegisterDasher from './components/registerDasher/RegisterDasher';

export default function Menu() {
    
    return (
        <div>
        <header>
            <div className='App'>
           
            </div>
        </header> 
        <Header/>
        <WhatNDere/>
        <Featuresss/>
        <RegisterClient/>
        <Footer/>
        </div>
    );
}