import React from "react";
import "./ExpertiseAreas.css";
import spaImage from "../../assets/imgs/massage-oil.jpg";
import { CiMusicNote1 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

export default function ExpertiseAreas() {
  return (
    <section className="expertise-section">
      <div className="expertise-img">
        <img src={spaImage} alt="Spa herbs oils" />
      </div>
      <div className="expertise-content">
        <h2 className="expertise-title">Expertise Areas</h2>
        <div className="expertise-divider"></div>
        <p className="expertise-desc">Have a look at our</p>
        <div className="expertise-list">
          <div className="expertise-item">
            <span className="icon music"><CiMusicNote1 /></span>
            <div>
              <h3>Wellness</h3>
              <p>Volutpat iste! Dolor, quasi malesuada dictums officia nisi! Tempus quo volutpat ad ratione.</p>
            </div>
          </div>
          <div className="expertise-item">
            <span className="icon heart"><FaRegHeart /></span>
            <div>
              <h3>Beauty</h3>
              <p>Volutpat iste! Dolor, quasi malesuada dictums officia nisi! Tempus quo volutpat ad ratione.</p>
            </div>
          </div>
          <div className="expertise-item">
            <span className="icon user"><IoPersonOutline /></span>
            <div>
              <h3>Massage</h3>
              <p>Volutpat iste! Dolor, quasi malesuada dictums officia nisi! Tempus quo volutpat ad ratione.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
