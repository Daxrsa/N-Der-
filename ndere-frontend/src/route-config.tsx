import NavigateToLandingPage from './utils/NavigateToLandingPage';
import LandingPage from './MainComponents/Client/LandingPage';

/* 
KETO PER PJESEN E ADMIN DASHBOARD

import Foods from './MainComponents/Foods';
import Clients from './MainComponents/Clients';
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
import SignUp from './MainComponents/Client/SignUp';
import RestaurantPage from './MainComponents/Client/RestaurantPage';

const routes = [
    {path: '/', component: LandingPage},
    {path: '/Foods', component: Foods},
    {path: '*', component: NavigateToLandingPage},
    {path: '/AboutUs', component: AboutUs},
    {path: '/Restaurant', component: RestaurantPage},
    {path: '/Contact', component: Contact},
    {path: '/SignUp', component: SignUp}
] 

export default routes;