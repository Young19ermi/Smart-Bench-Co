import React, { useState, useEffect } from 'react';
import './Carousel.css';
const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="carousel">
      <h1 className='carousel-header'>Our Product</h1>      <div className="carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index + 1}`} className="carousel-img" />
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
