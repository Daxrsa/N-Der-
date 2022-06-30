import NavigateToLandingPage from './utils/NavigateToLandingPage';
import LandingPage from './MainComponents/Client/LandingPage';

import Clients from './MainComponents/Clients';
/* 
KETO PER PJESEN E ADMIN DASHBOARD

import Foods from './MainComponents/Foods';
import Restaurants from './MainComponents/Restaurants';
import Deliverers from './MainComponents/Deliverers';
import Carts from './MainComponents/Carts';


const routes = [
    {path: '/', component: LandingPage},
    {path: '/clients', component: Clients},
    {path: '*', component: NavigateToLandingPage},
    {path: '/foods', component: Foods},
    {path: '/restaurants', component: Restaurants},
    {path: '/deliverers', component: Deliverers},
    {path: '/carts', component: Carts}
] */


import Foods from './MainComponents/Client/Foods';
import AboutUs from './MainComponents/Client/AboutUs';
import Contact from './MainComponents/Client/Contact';
import SignUp from './features/users/SignUpForm';
import RestaurantPage from './MainComponents/Client/RestaurantPage';
import Image from './MainComponents/Client/ImagePage';
import RegisterClient from './Components/registerClient/RegisterClient';
import RegisterDasher from './Components/registerDasher/RegisterDasher';
import RegisterRestaurant from './Components/registerRestaurant/RegisterRestaurant';
import Login from './features/users/LoginForm';

const routes = [
    {path: '/', component: LandingPage},
    {path: '/Foods', component: Foods},
    {path: '*', component: NavigateToLandingPage},
    {path: '/AboutUs', component: AboutUs},
    {path: '/clients', component: Clients},
    {path: '/Restaurant', component: RestaurantPage},
    {path: '/Contact', component: Contact},
    {path: '/SignUp', component: SignUp},
    {path: '/Image', component: Image},
    {path: '/RegisterClient', component: RegisterClient},
    {path: '/RegisterDasher', component: RegisterDasher},
    {path: '/RegisterRestaurant', component: RegisterRestaurant},
    {path: '/login', component: Login}
] 

export default routes;