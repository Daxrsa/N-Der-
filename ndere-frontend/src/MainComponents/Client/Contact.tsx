import Menu from "../../Menu";
import "../../styles/Contact.scss";
import delivery from "../../images/delivery.png";
import phone from "../../images/phone-red.svg";
import comments from "../../images/comments.svg";
import Footer from "../Footer";
import Grid from "@mui/material/Grid";
import Button from "../../utils/Button";

export default function Contact() {
    return (
        <>
            <section className="contact">
                <div className="container">
                    <h1>Contact Us</h1>
                    <h3>Reach out about any questions you might have</h3>
                </div>
            </section>
            <section className="contact-info">
                <div className="container">
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <div className="contact-info_left">
                                <img src={phone} alt="phone" />
                                <div>
                                    <h2>Dial</h2>
                                    <a href="#">+383 44 123 456</a>
                                </div>
                            </div>
                            <div className="contact-info_left">
                                <img src={comments} alt="phone" />
                                <div>
                                    <h2>Or chat with us</h2>
                                    <Button className="btn action">Chat</Button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="contact-info_right">
                                <h2>Send a message</h2>
                                <p>Send in your information and we'll get back to you as soon as possible.</p>
                                <form>
                                    <div>
                                        <div className="flex">
                                            <input type="text" placeholder="Emri"/>
                                            <input type="text" placeholder="Mbiemri"/>
                                        </div>
                                        <div className="flex">
                                            <input type="text" placeholder="Email"/>
                                            <input type="text" placeholder="Phone Number"/>
                                        </div>
                                    </div>
                                    <textarea name="contact" cols={30} rows={10}>Your message</textarea>
                                    <Button className="btn action">Send</Button>
                                </form>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <Footer />
        </>
    )
}