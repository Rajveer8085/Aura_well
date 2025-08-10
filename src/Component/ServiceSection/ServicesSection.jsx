import React from "react";
import "./ServicesSection.css";
import flask from "../../assets/imgs/flask.png"
import therapy from "../../assets/imgs/therapy.png"
import stoneTherapy from "../../assets/imgs/stone-therapy.png"

export default function ServicesSection() {
    return (
        <section className="services-section">
            {/* Top Divider */}
            <div className="services-top-divider"></div>

            {/* Headings */}
            <div className="services-header">
                <div className="services-subtitle">We make sure we serve</div>
                <h2 className="services-title">The Best of Our Service</h2>
            </div>

            {/* The Three Services */}
            <div className="services-list">
                <div className="service-card">
                    {/* Flask Icon */}
                    <div className="service-icon">
                        <img src={flask} alt="flask" />
                    </div>
                    <div className="service-heading">
                        <h4>Ayurvedic Treatment</h4>
                    </div>
                    <div className="service-underline"></div>
                    <div className="service-desc">
                        Optio wisi magni dui nam ducimus doloribus nemo pariatur sodales facilisis officiis.
                        Fusce nisl integer.
                    </div>
                </div>
                <div className="service-card">
                    {/* Soundwave Icon */}
                    <div className="service-icon">
                        <img src={therapy} alt="therapy" />

                    </div>
                    <div className="service-heading">
                        <h4>Ozone Therapy</h4>
                    </div>
                    <div className="service-underline"></div>
                    <div className="service-desc">
                        Suscipit habitasse tempus quasi, laboris curae, wisi, ex cursus,
                        auctor rerum sed explicabo litora fringilla nec.
                    </div>
                </div>
                <div className="service-card">
                    {/* Molecule Icon */}
                    <div className="service-icon">                       
                        <img src={stoneTherapy} alt="stoneTherapy" />
                    </div>
                    <div className="service-heading">
                        <h4>Stone Cure</h4>
                    </div>
                    <div className="service-underline"></div>
                    <div className="service-desc">
                        Iste pellentesque magnam auctor pellentesque labore impedit fermentum aperiam est labore cras.
                    </div>
                </div>
            </div>
        </section>
    );
}
