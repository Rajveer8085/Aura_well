import React from "react";
import "./StayInTouchFooter.css";
import footerBg from "../../assets/imgs/blog01.jpg"; // Use your spa background image
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function StayInTouchFooter() {
  return (
    <footer
      className="spa-footer"
      // style={{
      //   backgroundImage: `url(${footerBg})`
      // }}
    >
      <div className="footer-overlay">
        <div className="footer-content">
          <div className="footer-pretitle">
            Follow Us for Offers &amp; Updates
          </div>
          <h2 className="footer-title">Stay In Touch</h2>
          <div className="footer-desc">
            Repudiandae quisquam culpa diam, do ipsam est. Quam fuga nihil,
            similique felis ac recusandae. Doloribus praesent molestie mattis facilisis.
          </div>
          <div className="footer-socials">
            <a href="#" className="footer-social"><FaFacebookF /></a>
            <a href="#" className="footer-social"><FaInstagram /></a>
            <a href="#" className="footer-social"><FaTwitter /></a>
            <a href="#" className="footer-social"><FaGoogle /></a>
          </div>
        </div>
        <div className="footer-copyright">
          Copyright © 2025 Spa | Powered by Spa
        </div>
      </div>
    </footer>
  );
}
