import React from 'react';
import { Link } from 'react-router-dom';
import './CarsInformations.modules.css';

// Import the images manually
import t90 from '../../assets/images/Model-T90-small.png';
import t110 from '../../assets/images/Model-JimnyTwFront-small.png';
import t130 from '../../assets/images/Model-T130-noshadow.png';
import logo from '../../assets/images/logo.svg';
import stars from '../../assets/images/stars.svg';

// Define the car data with imported images
const cars = [
    {
        model: 'T90',
        description: 'The fun, nimble, pocket-sized, legend available in soft and hard top',
        image: t90,
        fuel: 'Petrol/Diesel',
    },
    {
        model: 'T110',
        description: 'The rugged, classic, Twisted T110 available in full cab or utility',
        image: t110,
        fuel: 'Petrol/Diesel',
    },
    {
        model: 'T130',
        description: 'The epitome of utility & durability, the Twisted T130',
        image: t130,
        fuel: 'Petrol/Diesel',
    },
    {
        model: 'TJ',
        description: 'Small with a big attitude, the redefined Twisted TJ',
        image: t130,
        fuel: 'Petrol',
    },
];

const CarsInformations = () => {
    return (
        <div className="cars-container">
            {/* Logo and Heading */}
            <div className="logo-and-heading">
                <img src={logo} alt='logo' className='logo-ci' />
                <p className='pTagCimodels'>Models</p>
            </div>

            {/* Car Cards */}
            <div className="cars-grid">
                {cars.map((car, index) => (
                    <div className="car-card" key={index}>
                        <img src={car.image} alt={car.model} className="car-image" />
                        <div className='CarsInformationsDiv'>
                            <h2>{car.model}</h2>
                            <p className="models-ci">{car.description}</p>
                            <Link to="/models" className="learn-more-button">
                                Learn More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <p className='ciPtagminiText'>*GET IN TOUCH FOR FURTHER PRICING INFORMATION. ALL FIGURES ON SITE ARE SUGGESTED RETAIL STARTING PRICE. EXCLUDES OPTIONS; TAXES; TITLE; REGISTRATION, DELIVERY, PROCESSING AND HANDLING FEE; DEALER CHARGES. DEALER SETS ACTUAL SELLING PRICE.</p>

            <p className="final-paragraph">
                “What you guys have achieved is astonishing. It’s such a fun vehicle to drive. It purrs. It growls.
                I feel like I’m stroking a snow leopard.
                The suspension is incredible, and it’s so responsive and easy in the corners. Great on the motorway
                with such smooth acceleration. I couldn’t resist a bit of off-road on the way home from the dealership,
                and it just handles superbly. Playful and stable. I can’t stop grinning.
                Thank you for making it happen and all the support.”
            </p>

            <div className='starsimgci'>
                <img src={stars} alt='stars' />
                <img src={stars} alt='stars' />
                <img src={stars} alt='stars' />
                <img src={stars} alt='stars' />
                <img src={stars} alt='stars' />
                <p>five stars</p>
            </div>
        </div>
    );
};

export default CarsInformations;
