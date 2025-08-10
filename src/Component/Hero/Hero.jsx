// HeroSection.js
import React from "react";
import "./Hero.css"
import BgImg from "../../assets/imgs/spa-5.jpg"
export default function HeroSection() {
  return (
    <section className="hero-bg">
      <div className="hero-content">
        <p className="hero-pretitle">We assure you</p>
        <h1 className="hero-title">Rejuvenated Body &amp; Soul</h1>
        <p className="hero-subtitle">
          A Aura spa is dedicated to inspiring Balanced Life – Healthy Mind.
        </p>
        <p className="hero-contact">
          <span className="call-icon">📞</span>
          +917828943088
        </p>
      </div>
      
    </section>
  );
}
