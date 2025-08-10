import React from "react";
import "./BookAppointment.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";

export default function BookAppointment() {
  const InitialValue = {
    name: "",
    email: "",
    phone :""
  };
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    phone: yup.string()
      .matches(/^\d{10}$/, "Phone must be 10 digits")
      .required("Phone is required")
  });
  return (
    <section className="book-outer">
      <div className="book-header">
        <div className="book-pretitle">What are you waiting for…</div>
        <h2 className="book-title">Book an Appointment</h2>
      </div>
      <div className="book-content">
        {/* Info */}
        <div className="book-info">
          <h3 className="info-title">Hours &amp; Contact</h3>
          <div className="info-text">
            8 Vishwakarma Nagar Ujjain Road,Dewas
          </div>
          <div className="info-hours">
            Mon-Fri: 10am–10pm / Sat-Sun: 12pm–10pm
          </div>
        </div>
        {/* Form */}
        <Formik
          initialValues={InitialValue}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.resetForm();
          }}
        >
          <Form className="spa-form">
            <label>
              Name
              <Field name="name" type="text" />
              <ErrorMessage name="name" component="div" className="input-error" />
            </label>
            <label>
              Email
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" className="input-error" />
            </label>
            <label>
              Phone
              <Field name="phone" type="text" />
              <ErrorMessage name="phone" component="div" className="input-error" />
            </label>
            <button type="submit">SAVE UPTO 10% TODAY</button>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
