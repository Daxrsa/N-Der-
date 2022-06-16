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
                    <li><NavLink to="/foods">Foods</NavLink></li>
                    <li><NavLink to="/restaurants">Restaurants</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                    <li><NavLink to="/signin">Log In</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}