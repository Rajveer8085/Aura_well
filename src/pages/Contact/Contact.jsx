import React from "react";
import "./Contact.css";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-subtitle">
                    We'd love to hear from you! Whether you have questions or want to book an appointment, reach out to us.
                </p>

                <div className="contact-cards">
                    <div className="contact-card">
                        <FiMapPin className="contact-icon" />
                        <h3>Address</h3>
                        <p>8 Vishwakarma Nagar Ujjain Road, Dewas</p>
                    </div>

                    <div className="contact-card">
                        <FiPhone className="contact-icon" />
                        <h3>Phone</h3>
                        <p><a href="tel:+917828943088">7828 943 088</a></p>
                    </div>

                    <div className="contact-card">
                        <FiMail className="contact-icon" />
                        <h3>Email</h3>
                        <p><a href="mailto:info@auraspa.com">aura.well101@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
