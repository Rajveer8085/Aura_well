import React from "react";
import "./About.css";
import therapistsIcon from "../../assets/imgs/massage.png"
import naturalIcom from "../../assets/imgs/natural-ingredients.png"
import tranquilityIcon from "../../assets/imgs/tranquility.png"

export default function About() {
    return (
        <section className="about-hero">
            <div className="about-container">
                <h1 className="gradient-text">About Aura Spa</h1>
                <p className="tagline">
                    Rejuvenate your body,<br /> refresh your mind, <br /> renew your spirit.
                </p>

                <div className="about-content">
                    <p>
                        At Aura Spa, we combine ancient healing rituals with modern wellness techniques to create a serene sanctuary just for you.
                        Our expert therapists provide personalized treatments using natural, eco-friendly products designed to revitalize your senses.
                    </p>
                    <p>
                        Whether you seek relaxation, rejuvenation, or holistic healing, our peaceful oasis is here to nurture your body, mind, and soul.
                    </p>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="icon">
                            <img src={therapistsIcon} alt="Expert Therapists" className="icon-img" />
                        </div>
                        <h3>Expert Therapists</h3>
                        <p>Certified professionals dedicated to your well-being.</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">
                            <img src={naturalIcom} alt="Expert Therapists" className="icon-img" />
                        </div>
                        <h3>Natural Ingredients</h3>
                        <p>Organic, sustainable products enhancing your experience.</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">
                            <img src={tranquilityIcon} alt="Expert Therapists" className="icon-img" />
                        </div>
                        <h3>Tranquil Environment</h3>
                        <p>A calming space designed to soothe and heal.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
