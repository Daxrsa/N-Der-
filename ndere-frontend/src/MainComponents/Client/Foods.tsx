import Menu from "../../Menu";
import fastfood from "../../images/fastfood.png";
import burger from "../../images/burger.png";
import kebabs from "../../images/kebabs.png";
import Breakfast from "../../images/breakfast.png";
import Albanian from "../../images/albanian.png";
import Japanese from "../../images/japanese.png";
import Mexican from "../../images/mexican.png";
import Pizza from "../../images/pizza.png";
import guyPizza from "../../images/pizza-party.jpg";
import fajitachicken from "../../images/fajitachicken.png";
import pabloburger from "../../images/pabloburger.png";
import doner from "../../images/doner.png";
import "../../styles/Foods.scss";
import "../../styles/Components.scss";
import Card from "../../Components/Card";
import Grid from '@mui/material/Grid';
import Button from "../../utils/Button";
import Footer from "../../MainComponents/Footer";

const foods = [
    {img: fastfood, name: 'Fast Food'},
    {img: burger, name: 'Burgers'},
    {img: kebabs, name: 'Kebabs'},
    {img: Breakfast, name: 'Breakfast'},
    {img: Albanian, name: 'Albanian'},
    {img: Japanese, name: 'Japanese'},
    {img: Mexican, name: 'Mexican'},
    {img: Pizza, name: 'Pizza'}
]

export default function Foods() {
    return (
        <>
            <section className="foods-hero">
                <div className="container">
                    <ul className="foods-hero_list">
                        {foods.map((food) => {
                            return <li><img src={food.img} alt={food.name}/>{food.name}</li>
                        })}
                    </ul>
                </div>
            </section>
            <section className="offers-section">
                <div className="container">
                    <h1>Popular Offers</h1>
                    <div className="offers-section_popular">
                        <Grid  container spacing={2}>
                            <Grid item xs={4}>
                                <Card img={fajitachicken} title="Fajita Chicken Crunch"/>
                            </Grid>
                            <Grid item xs={4}>
                                <Card img={pabloburger} title="Pablo Burger"/>
                            </Grid>
                            <Grid item xs={4}>
                                <Card img={doner} title="Chicken Doner"/>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
            <section className="restaurants-section">
                <div className="container">
                    <h1>Restaurants</h1>
                    <Grid  container spacing={2}>
                        <Grid item xs={4}>
                            <Card img={fajitachicken} title="Papirun"/>
                        </Grid>
                        <Grid item xs={4}>
                            <Card img={pabloburger} title="Buffalo"/>
                        </Grid>
                        <Grid item xs={4}>
                            <Card img={doner} title="Tatlises"/>
                        </Grid>
                        <Grid item xs={4}>
                            <Card img={doner} title="Soma"/>
                        </Grid>
                        <Grid item xs={4}>
                            <Card img={doner} title="Extreme Pizza"/>
                        </Grid>
                        <Grid item xs={4}>
                            <Card img={doner} title="Burger King"/>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <section className="signup">
                <div className="container">
                    <Grid container spacing={4} mt={10}>
                        <Grid item xs={6}>
                            <div>
                                <h3>Want Free Delivery on Your First Order?</h3>
                                <form>
                                    <input type="text" placeholder="Name"/>
                                    <input type="text" placeholder="Surname"/>
                                    <input type="text" placeholder="Email"/>
                                    <input type="text" placeholder="Password"/>
                                    <div className="flex">
                                        <Button className="btn action">Sign Up</Button>
                                        <Button className="btn">Log In</Button>
                                    </div>
                                </form>
                            </div>                    
                        </Grid>
                        <Grid item xs={6}>
                            <img src={guyPizza} alt="pizza-guy" />
                        </Grid>
                    </Grid>
                </div>
            </section>
            <Footer />
        </>
    )
}