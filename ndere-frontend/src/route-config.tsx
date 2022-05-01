import AboutUs from './MainComponents/AboutUs';
import Clients from './MainComponents/Clients';
import Hero from './MainComponents/Hero';
import Restaurants from './MainComponents/Restaurants';
import NavigateToLandingPage from './utils/NavigateToLandingPage';

const routes = [
    {path: '/', component: Hero},
    {path: '/clients', component: Clients},
    {path: '*', component: NavigateToLandingPage},
    {path: '/about', component: AboutUs},
    {path: '/restaurants', component: Restaurants}
]

export default routes;