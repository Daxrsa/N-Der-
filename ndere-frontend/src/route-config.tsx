import Foods from './MainComponents/Foods';
import Clients from './MainComponents/Clients';
import Hero from './MainComponents/Hero';
import Restaurants from './MainComponents/Restaurants';
import Deliverers from './MainComponents/Deliverers';
import NavigateToLandingPage from './utils/NavigateToLandingPage';
import MyCart from './MainComponents/MyCart';
import RegisterClient from './components/registerClient/RegisterClient';





const routes = [
    {path: '/', component: Hero},
    {path: '/clients', component: Clients},
    {path: '*', component: NavigateToLandingPage},
    {path: '/foods', component: Foods},
    {path: '/restaurants', component: Restaurants},
    {path: '/deliverers', component: Deliverers},
    {path: '/mycart',component: MyCart},
    {path: '/registerClient',component: RegisterClient}
]

export default routes;