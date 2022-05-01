import { NavLink } from 'react-router-dom';
import logo from './logo.svg';

export default function Menu() {
    
    return (
        <header>
            <nav className="container">
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                    <h3>N'Derë</h3>
                </NavLink>
                <ul>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="/clients">Clients</NavLink></li>
                    <li><NavLink to="/MyCart">MyCart</NavLink></li>
                    <li><NavLink to="/restaurants">Restaurants</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}