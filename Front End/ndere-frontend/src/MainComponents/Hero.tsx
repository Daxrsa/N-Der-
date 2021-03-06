import Button from '../utils/Button';
import logo from './../logo-primary.svg';

export default function Menu() {    
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-left">
                    <img src={logo} alt="logo" />
                    <h3>Kycuni ne faqe, dhe shikoni te dhenat</h3>
                    <Button>Kycu</Button>
                </div>
                <h1>Restaurants Delivered to Your Door</h1>
            </div>
        </section>
    );
}