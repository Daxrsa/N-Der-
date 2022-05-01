
import Clients from './MainComponents/Clients';
import Hero from './MainComponents/Hero';
import NavigateToLandingPage from './utils/NavigateToLandingPage';

const routes = [
    {path: '/', component: Hero},
    {path: '/clients', component: Clients},
    {path: '*', component: NavigateToLandingPage},
]

export default routes;