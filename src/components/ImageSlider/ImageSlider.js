import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ImageSlider.modules.css';
// import responimg1 from '../../assets/images/1.jpg';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of slide texts corresponding to each slide
  const slideTexts = [
    "CUSTOM TO THE CORE",
    "QUIETLY COOL",
    "THE BEST. MADE BETTER"
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatic slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="image-slider">
      <button className="prev" onClick={handlePrev}>‹</button>

      <div className="slide-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide-image" />

        <div className="overlay">
          <h1 className='imgsliderslidertext'>{slideTexts[currentIndex]}</h1>
          <Link to="/commissions" className="btn-commissions">COMMISSIONS</Link>
        </div>
      </div>

      <button className="next" onClick={handleNext}>›</button>
    </div>
  );
};

export default ImageSlider;
