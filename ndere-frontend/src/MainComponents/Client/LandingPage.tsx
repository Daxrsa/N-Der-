import Menu from "../../Menu";
import search from "../../images/search.svg";
import deliveryMan from "../../images/delivery-man.png";
import restaurant from "../../images/restaurant.png";
import food1 from "../../images/food1.png";
import Grid from "@mui/material/Grid";
import Button from "../../utils/Button";
import Footer from "../../MainComponents/Footer";
import { NavLink } from "react-router-dom";
import "../../styles/LandingPage.scss";
import SignUp from "./SignUp";

export default function LandingPage() {
    return (
        <>
            <section className="hero-landing">
                <div className="container">
                    <h1>Restaurants Delivered to Your Door</h1>
                    <div className="flex">
                        <input type="text" placeholder="Search by Address"/>
                        <img src={search} alt="search" />
                    </div>
                </div>
            </section>
            <section className="register">
                <div className="container">
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <article>
                                <img src={deliveryMan} alt="delivery-man" />
                                <h2>Become a Deliverer</h2>
                                <p>As a delivery driver, you’ll make reliable money—working from anywhere.</p>
                                <a href="#">Start Earning</a>
                            </article>
                        </Grid>
                        <Grid item xs={6}>
                            <article>
                                <img src={restaurant} alt="restaurant" />
                                <h2>Register your Restaurant</h2>
                                <p>As a restaurant, you will be able to grow your business.</p>
                                <a href="#">Sign Up Here</a>
                            </article>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <section className="flavors">
                <div className="container">
                    <img src={food1} alt="food" />
                    <div>
                        <h2>All Flavors Welcome</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <br />
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    </div>
                </div>
            </section>
            <SignUp />
            <Footer />
        </>
    )
}