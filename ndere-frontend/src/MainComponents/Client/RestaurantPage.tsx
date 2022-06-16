import logo from "../../images/extreme.png";
import "../../styles/RestaurantPage.scss";
import star from "../../images/star.svg";
import Button from "../../utils/Button";
import Grid from "@mui/material/Grid";
import samun from "../../images/samun.png";
import Footer from "../Footer";

export default function RestaurantPage() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <img className="logo" src={logo} alt="logo" />
                </div>
            </section>
            <section className="restaurant-info">
                <div className="container">
                    <div className="restaurant-info_name">
                        <h1>Extreme Pizza</h1>
                        <p>Samun, Pide, Sandwich</p>
                        <h3>Prishtine</h3>
                    </div>
                    <div className="restaurant-info_reviews">
                        <h2>Reviews</h2>
                        <div className="restaurant-info_reviews--stats">
                            <div className="flex">
                                <span>4.7</span>
                                <img src={star} />
                                <span>520+ ratings</span>
                            </div>
                            <Button className="btn action">View All Reviews</Button>
                        </div>
                        <div className="restaurant-info_reviews--carousel">
                            <article>
                                <h4>Filani</h4>
                                <div className="flex">
                                    <div className="stars">
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                    </div>
                                    <span>28/03/2022</span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Mauris consequat pulvinar euismod.
                                </p>
                            </article>
                            <article>
                                <h4>Filani</h4>
                                <div className="flex">
                                    <div className="stars">
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                    </div>
                                    <span>28/03/2022</span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Mauris consequat pulvinar euismod.
                                </p>
                            </article>
                            <article>
                                <h4>Filani</h4>
                                <div className="flex">
                                    <div className="stars">
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                        <img src={star} alt="rating" />
                                    </div>
                                    <span>28/03/2022</span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Mauris consequat pulvinar euismod.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section className="menu">
                <div className="container">
                    <h2>Menu</h2>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <article className="menu-article">
                                <div className="menu-article_info">
                                    <h3>Extreme Samun</h3>
                                    <div>
                                        <span>15-20 min</span>
                                        <p>2.50€</p>
                                    </div>
                                </div>
                                <img src={samun} alt="food-item" />
                            </article>
                        </Grid>
                        <Grid item xs={6}>
                            <article className="menu-article">
                                <div className="menu-article_info">
                                    <h3>Extreme Samun</h3>
                                    <div>
                                        <p>15-20 min</p>
                                        <p>2.50€</p>
                                    </div>
                                </div>
                                <img src={samun} alt="food-item" />
                            </article>
                        </Grid>
                        <Grid item xs={6}>
                            <article className="menu-article">
                                <div className="menu-article_info">
                                    <h3>Extreme Samun</h3>
                                    <div>
                                        <span>15-20 min</span>
                                        <p>2.50€</p>
                                    </div>
                                </div>
                                <img src={samun} alt="food-item" />
                            </article>
                        </Grid>
                        <Grid item xs={6}>
                            <article className="menu-article">
                                <div className="menu-article_info">
                                    <h3>Extreme Samun</h3>
                                    <div>
                                        <p>15-20 min</p>
                                        <p>2.50€</p>
                                    </div>
                                </div>
                                <img src={samun} alt="food-item" />
                            </article>
                        </Grid>
                        <Grid item xs={6}>
                            <article className="menu-article">
                                <div className="menu-article_info">
                                    <h3>Extreme Samun</h3>
                                    <div>
                                        <span>15-20 min</span>
                                        <p>2.50€</p>
                                    </div>
                                </div>
                                <img src={samun} alt="food-item" />
                            </article>
                        </Grid>
                        <Grid item xs={6}>
                            <article className="menu-article">
                                <div className="menu-article_info">
                                    <h3>Extreme Samun</h3>
                                    <div>
                                        <p>15-20 min</p>
                                        <p>2.50€</p>
                                    </div>
                                </div>
                                <img src={samun} alt="food-item" />
                            </article>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <Footer />
        </>
    )
}