import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/imgs/generated-image.png";
import { NavLink } from "react-router-dom";

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

      {/* Nav links */}
      <nav className={`lotus-nav ${navOpen ? "nav-open" : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Contact
        </NavLink>

        {/* Appointment button inside nav for mobile */}
        <NavLink
          to="/appointment"
          className={({ isActive }) =>
            `appointment-btn mobile-only ${isActive ? "active" : ""}`
          }
          onClick={closeMenu}
        >
          BOOK AN APPOINTMENT
        </NavLink>
      </nav>

      {/* Appointment button desktop */}
      <NavLink
        to="/appointment"
        className={({ isActive }) =>
          `appointment-btn desktop-only ${isActive ? "active" : ""}`
        }
      >
        BOOK AN APPOINTMENT
      </NavLink>
    </header>
  );
}
