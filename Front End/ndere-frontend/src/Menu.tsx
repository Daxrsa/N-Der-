import logo from './logo.svg';

export default function Menu() {
    
    return (
        <header>
            <nav className="container">
                <a href="/">
                    <img src={logo} alt="logo" />
                    <h3>N'Derë</h3>
                </a>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Restaurants</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
            </nav>
        </header>
    );
}