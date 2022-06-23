import { NavLink } from 'react-router-dom';
import logo from './logo.svg';

export default function Menu() {
    /* prej daorses
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/foods">Foods</NavLink></li>
        <li><NavLink to="/clients">Clients</NavLink></li>
        <li><NavLink to="/restaurants">Restaurants</NavLink></li>
        <li><NavLink to="/deliverers">Dashers</NavLink></li>
        <li><NavLink to="/mycart">My Cart</NavLink></li>
        <li><NavLink to="/registerDasher">Become a Deliverer</NavLink></li>
        <li><NavLink to="/registerRestaurant">Become a Partner</NavLink></li>
        <li><NavLink to="/registerClient">Sign Up</NavLink></li>
    */
    return (
        <header>
            <nav className="container">
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                    <h3>N'Derë</h3>
                </NavLink>
                <ul>
                    <li><NavLink to="/foods">Foods</NavLink></li>
                    <li><NavLink to="/Restaurant">Restaurants</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/AboutUs">About Us</NavLink></li>
                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}