import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SliderCars.modules.css';

import t90 from '../../assets/images/Model-T90-small.png';
import t110 from '../../assets/images/Model-JimnyTwFront-small.png';
import t130 from '../../assets/images/Model-T130-noshadow.png';
import logo from '../../assets/images/logo.svg';

const cars = [
    {
        model: 'T90',
        image: t90,
        pageLink: '/modelsT'
    },
    {
        model: 'T110',
        image: t110,
        pageLink: '/modelsT'
    },
    {
        model: 'T130',
        image: t130,
        pageLink: '/modelsT'
    },
];

const SliderCars = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
    };

    return (
        <div className="slider-container">

            <div className="logo-section">
                <img src={logo} alt="Company Logo" className="logosc" />
                <p className="logo-text">COMMISSIONS</p>
            </div>

            <div className="slider-content">
                <div className="arrow left-arrow" onClick={prevSlide}>
                    &lt;
                </div>

                <div className="slider-image">
                    <img src={cars[currentIndex].image} alt={cars[currentIndex].model} />
                    <p className='sc-pTag'>Build Your Dream Spec</p>
                    <Link to={cars[currentIndex].pageLink} className="model-button">
                        {cars[currentIndex].model}
                    </Link>
                </div>

                <div className="arrow right-arrow" onClick={nextSlide}>
                    &gt;
                </div>
            </div>
        </div>
    );
};

export default SliderCars;
