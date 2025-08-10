import React from "react";
import "./AppointmentSection.css";
import spaBanner from "../../assets/imgs/divider-free-img-1024x250.png"; // Replace with your banner image

export default function AppointmentSection() {
    return (
        <section className="appointment-section">
            <div className="appointment-content">
                <div className="appointment-logo">Aura Spa</div>
                <h2 className="appointment-title">Appointment</h2>
                <div className="appointment-subtitle">
                    Want to Make a Booking or Have a Question?
                </div>
                <div className="appointment-info">
                    Call us on <span className="appt-phone">+917828943088</span> or simply book an appointment today itself.
                </div>
                <button className="appointment-button">
                    BOOK AN APPOINTMENT
                </button>
            </div>
            <div className="appointment-img-wrap">
                <img src={spaBanner} alt="Spa banner" />
            </div>
        </section>
    );
}
