import React from 'react';
import './Gallery.css';
import image1 from "../../assets/imgs/IMG-20250808-WA0004.jpg"
import image2 from "../../assets/imgs/IMG-20250808-WA0005.jpg"
import image3 from "../../assets/imgs/IMG-20250808-WA0006.jpg"
import image4 from "../../assets/imgs/IMG-20250808-WA0007.jpg"
import image5 from "../../assets/imgs/IMG-20250808-WA0008.jpg"
import image6 from "../../assets/imgs/IMG-20250808-WA0009.jpg"
import image7 from "../../assets/imgs/IMG-20250808-WA0010.jpg"
import image10 from "../../assets/imgs/banner3.jpg"

const photos = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image10,
];

export default function Gallery() {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Spa Gallery</h2>
      <div className="gallery-grid">
        {photos.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Spa ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
