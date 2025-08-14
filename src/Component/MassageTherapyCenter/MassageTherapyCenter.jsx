import React, { useContext } from "react";
import "./MassageTherapyCenter.css";

import img1 from "../../assets/imgs/luxury-spa-treat.jpg";
import img2 from "../../assets/imgs/stone-ther-treat.jpg";
import img3 from "../../assets/imgs/aroma-therapy-treat.jpg";
import img4 from "../../assets/imgs/skin-treatment-treat.jpg";
import { GiCentaurHeart } from "react-icons/gi";
import { GiStoneSphere } from "react-icons/gi";
import { SiBigcartel } from "react-icons/si";
import { GiSlumberingSanctuary } from "react-icons/gi";
import SpaContext from "../../Store/SpaContext";


export default function MassageTherapyCenter() {
  
  const {appointmentNavigate} = useContext(SpaContext)

  const pairs = [
    
    {
      image: img1,
      info: {
        icon: (
            <GiCentaurHeart />
        ),
        title: "Luxury Spa",
        desc: "Pharetra incididunt nullam quidem similique haretra incididunt nullam quidem similique.",
        price: "$75"
      }
    },
    {
      image: img2,
      info: {
        icon: (
          <GiStoneSphere />
        ),
        title: "Stone Therapy",
        desc: "Pharetra incididunt nullam quidem similique haretra incididunt nullam quidem similique.",
        price: "$75"
      }
    },
    {
      image: img3,
      info: {
        icon: (
          <SiBigcartel />
        ),
        title: "Aroma Therapy",
        desc: "Pharetra incididunt nullam quidem similique haretra incididunt nullam quidem similique.",
        price: "$75"
      }
    },
    {
      image: img4,
      info: {
        icon: (
          <GiSlumberingSanctuary />
        ),
        title: "Skin Treatment",
        desc: "Pharetra incididunt nullam quidem similique haretra incididunt nullam quidem similique.",
        price: "$75"
      }
    }
  ];

  const pairedRows = [];
  for (let i = 0; i < pairs.length; i += 2) {
    pairedRows.push([pairs[i], pairs[i + 1]]);
  }

  return (
    <section className="therapy-main">
      <div className="therapy-header">
        <div className="therapy-pretitle">Have a look at our</div>
        <h2 className="therapy-title">Massage Therapy Center</h2>
        <div className="therapy-desc">
          You deserve better than a rushed massage by a rookie therapist in a place that makes you feel more stressed.
        </div>
      </div>
      <div className="therapy-cards-grid">
        {pairedRows.map((row, idx) => (
          <div className="therapy-row" key={idx}>
            {/* Left image card */}
            <div className="therapy-img-card">
              <img src={row[0].image} alt={row[0].info.title} />
            </div>
            {/* Right info card */}
            <div className="therapy-info-card">
              <div className="therapy-icon">{row[0].info.icon}</div>
              <div className="therapy-card-title">{row[0].info.title}</div>
              <div className="therapy-card-desc">{row[0].info.desc}</div>
              {/* <div className="therapy-card-price">Starting From <span>{row[0].info.price}</span></div> */}
            </div>
            {/* Next pair (if exists) */}
            {row[1] &&
              <>
                <div className="therapy-img-card">
                  <img src={row[1].image} alt={row[1].info.title} />
                </div>
                <div className="therapy-info-card">
                  <div className="therapy-icon">{row[1].info.icon}</div>
                  <div className="therapy-card-title">{row[1].info.title}</div>
                  <div className="therapy-card-desc">{row[1].info.desc}</div>
                  {/* <div className="therapy-card-price">Starting From <span>{row[1].info.price}</span></div> */}
                </div>
              </>
            }
          </div>
        ))}
      </div>
      <div className="therapy-cta">
        <button className="therapy-cta-btn" onClick={appointmentNavigate}>BOOK AN APPOINTMENT</button>
      </div>
    </section>
  );
}
