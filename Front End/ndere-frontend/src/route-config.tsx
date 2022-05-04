
import Dashers from './MainComponents/Dashers';
import Hero from './MainComponents/Hero';
import NavigateToLandingPage from './utils/NavigateToLandingPage';

const routes = [
    {path: '/', component: Hero},
    {path: '/Dashers', component: Dashers},
    {path: '*', component: NavigateToLandingPage},
]

export default routes;