import Grid from "@mui/material/Grid";
import logo from "../../src/logo.svg";
import phoneIcon from "../../src/images/phone.svg";
import mailIcon from "../../src/images/mail.svg";
import { NavLink } from "react-router-dom";
import Button from "../utils/Button";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <h2>Contact Us</h2>
                        <h3>Send us a message</h3>
                        <form>
                            <input type="text" placeholder="Full Name" />
                            <input type="text" placeholder="Email" />
                            <textarea cols={30} rows={10}>
                                Your message
                            </textarea>
                            <Button>Submit</Button>
                        </form>
                    </Grid>
                    <Grid item xs={4}>
                        <h2>Siteman</h2>
                        <h3>Our pages</h3>
                        <ul>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/food">Food</NavLink></li>
                            <li><NavLink to="/restaurants">Restaurants</NavLink></li>
                            <li><NavLink to="">Sign Up</NavLink></li>
                        </ul>
                    </Grid>
                    <Grid item xs={4}>
                        <img className="logo" src={logo} alt="logo" />
                        <div className="flex">
                            <img src={phoneIcon} alt="phone" />
                            <span>+383 44 123 456</span>
                        </div>
                        <div className="flex">
                            <img src={mailIcon} alt="mail" />
                            <span>ndere-ks@gmail.com</span>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="copyright">Copyright All Rights Reserved N’Derë 2022 ©</div>
        </footer>
    )
}