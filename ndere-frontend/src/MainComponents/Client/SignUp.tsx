import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import guyPizza from "../../images/pizza-party.jpg";
import burger from "../../images/hamburger.jpg";
import Menu from "../../Menu";
import Button from "../../utils/Button";

export default function SignUp() {
    return (
        <section className="register-form">
            <div className="container">
                <Grid container spacing={10}>
                    <Grid item xs={6}>
                        <h2>Want Free Delivery on Your First Order?</h2>
                        <form>
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="Surname"/>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Phone Number"/>
                            <input type="password" placeholder="Password"/>
                            <input type="text" placeholder="Address"/>
                            <input type="text" placeholder="Zip Code"/>
                            <Button type="submit" className="btn action">Register</Button>
                        </form>
                        <p>Already have an account?</p>
                        <NavLink to={'/login'}>Log In instead</NavLink>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={burger} alt="burger" />
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}