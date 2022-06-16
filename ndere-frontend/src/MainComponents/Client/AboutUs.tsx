import Menu from "../../Menu";
import "../../styles/About.scss";
import delivery from "../../images/delivery.png";
import Footer from "../Footer";

export default function AboutUs() {
    return (
        <>
            <section className="about">
                <div className="container">
                    <h1>About Us</h1>
                    <h3>Learn more about N'Derë and the opportunities we provide</h3>
                </div>
            </section>
            <section className="about-info">
                <div className="container">
                    <h1>What is N’Derë</h1>
                    <div className="flex">
                        <img src={delivery} alt="delivery" />
                        <div className="about-info_left">
                            <p>
                                Available in all cities in Kosovo, N'derë is a 
                                platform about giving people opportunities 
                                such as establishing a network, helping 
                                them with a part-time job, and allowing local 
                                businesses to further expand. 
                            </p>
                            <p>
                                We empower 
                                local businesses and local drivers through 
                                those opportunities. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}