import React from "react";
import "./SpaBooking.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

export default function SpaBooking() {
    const initialValues = { name: "", email: "", phone: "" };

    const validationSchema = yup.object({
        name: yup.string().required("*Please enter your name"),
        email: yup.string().email("*Invalid email address").required("*Email is required"),
        phone: yup.string()
            .matches(/^\d{10}$/, "*Phone must be exactly 10 digits")
            .required("*Phone number is required"),
        type: yup.string().required("*Please select an option")
    });

    // api call 
    const [FormValue, setFormValue] = useState([])
    console.log(FormValue, "this is form values...")

    const AppointmentHandler = async (Formdata) => {
        try {
            const { name, email, type, phone } = Formdata
            await axios.post("https://aura-well-server.onrender.com/BookAppointment", { name, email, phone, type })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section className="book-section">
            <div className="book-container">
                <header className="book-header">
                    <p className="book-pretitle">Your Wellness Journey Starts Here</p>
                    <h1 className="book-title">Book an Appointment</h1>
                    <p className="book-subtitle">Relax. Revive. Renew. Reserve your spot now!</p>
                </header>
                <div className="book-body">
                    <div className="book-info">
                        <h2 className="info-heading">Contact & Hours</h2>
                        <p className="info-text">8 Vishwakarma Nagar Ujjain Road,Dewas</p>
                        <p className="info-text">Phone:7828943088</p>
                        <p className="info-hours">Mon-Fri: 10am–10pm &nbsp;|&nbsp; Sat-Sun: 12am–10pm</p>
                    </div>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            setFormValue(values)
                            AppointmentHandler(values)
                        }}
                    >
                        <Form className="book-form">
                            <label htmlFor="name" className="form-label">Name</label>
                            <Field name="name" id="name" type="text" placeholder="Enter your name" className="form-input" />
                            {/* <ErrorMessage name="name" component="div" className="form-error" /> */}
                            <div className="form-error">
                                <ErrorMessage name="name" />
                            </div>


                            <label htmlFor="email" className="form-label">Email</label>
                            <Field name="email" id="email" type="email" placeholder="Enter your email" className="form-input" />
                            {/* <ErrorMessage name="email" component="div" className="form-error" />
                             */}
                            <div className="form-error">
                                <ErrorMessage name="email" />
                            </div>

                            <label htmlFor="phone" className="form-label">Phone</label>
                            <Field name="phone" id="phone" type="tel" placeholder="10-digit phone number" className="form-input" />
                            {/* <ErrorMessage name="phone" component="div" className="form-error" /> */}
                            <div className="form-error">
                                <ErrorMessage name="phone" />
                            </div>

                            <label htmlFor="type" className="form-label">Type</label>
                            <Field as="select" name="type" id="type" className="form-input">
                                <option value="">-- Select --</option>
                                <option value="inquiry">Inquiry</option>
                                <option value="appointment">Appointment</option>
                            </Field>
                            {/* <ErrorMessage name="type" component="div" className="form-error" /> */}
                            <div className="form-error">
                                <ErrorMessage name="type" />
                            </div>

                            <button type="submit" className="submit-btn">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </section>
    );
}
