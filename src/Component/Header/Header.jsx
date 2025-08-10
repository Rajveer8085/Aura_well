import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/imgs/generated-image.png";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  // Close nav menu on link click (mobile)
  const closeMenu = () => setNavOpen(false);

  return (
    <header className="lotus-header">
      <div className="logo-section">
        <span className="lotus-logo">
          <img src={logo} alt="Aura Spa" />
          <span className="logo-text">Aura spa</span>
        </span>
      </div>

      {/* Hamburger button for mobile */}
      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        onClick={() => setNavOpen((val) => !val)}
      >
        <span className={`hamburger ${navOpen ? "open" : ""}`}></span>
      </button>

      {/* Nav links with open/close class */}
      <nav className={`lotus-nav ${navOpen ? "nav-open" : ""}`}>
        <a href="/" className="active" onClick={closeMenu}>Home</a>
        <a href="/about" onClick={closeMenu}>About</a>
        <a href="/services" onClick={closeMenu}>Services</a>
        <a href="/contact" onClick={closeMenu}>Contact</a>
        {/* Appointment button inside nav for mobile */}
        <button className="appointment-btn mobile-only" onClick={closeMenu}>
          BOOK AN APPOINTMENT
        </button>
      </nav>
      {/* Appointment button desktop */}
      <button className="appointment-btn desktop-only">
        BOOK AN APPOINTMENT
      </button>
    </header>
  );
}
