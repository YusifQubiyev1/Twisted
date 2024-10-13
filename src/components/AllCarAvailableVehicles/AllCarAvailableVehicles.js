import React, { useState } from "react";
import './AllCarAvailableVehicles.modules.css';

import car1 from '../../assets/images/car1.jpg';
import car2 from '../../assets/images/car2.jpg';
import car3 from '../../assets/images/car3.jpg';
import car4 from '../../assets/images/car4.jpg';
import car5 from '../../assets/images/car5.jpg';
import car6 from '../../assets/images/car6.jpg';
import car7 from '../../assets/images/car7.jpg';
import car8 from '../../assets/images/car8.jpg';
import car9 from '../../assets/images/car9.jpg';
import car10 from '../../assets/images/car10.jpg';
import car11 from '../../assets/images/car11.jpg';
import car12 from '../../assets/images/car12.jpg';

const carsData = [
    { id: 1, name: 'T90', img: car1, price: '$100,000' },
    { id: 2, name: 'T90', img: car2, price: '$120,000' },
    { id: 3, name: 'T110', img: car3, price: '$130,000' },
    { id: 4, name: 'TJ', img: car4, price: '$85,000' },
    { id: 5, name: 'T110', img: car5, price: '$140,000' },
    { id: 6, name: 'T90', img: car6, price: '$110,000' },
    { id: 7, name: 'TJ', img: car7, price: '$90,000' },
    { id: 8, name: 'T110', img: car8, price: '$135,000' },
    { id: 9, name: 'T90', img: car9, price: '$150,000' },
    { id: 10, name: 'T110', img: car10, price: '$125,000' },
    { id: 11, name: 'TJ', img: car11, price: '$95,000' },
    { id: 12, name: 'T110', img: car12, price: '$145,000' },
];

const AllCarAvailableVehicles = () => {
    const [filter, setFilter] = useState('All');

    const filteredCars = filter === 'All' ? carsData : carsData.filter(car => car.name === filter);

    const handleFilterClick = (name) => {
        setFilter(name);
    };

    return (
        <div className="available-vehiclesAll1">
            <h1>HERE’S WHAT’S IN OUR GARAGE</h1>
            <p>TAKE A LOOK AT OUR AVAILABLE VEHICLES</p>
            <div className="filter-buttonsAll1">
                <button onClick={() => handleFilterClick('All')}>All</button>
                <button onClick={() => handleFilterClick('T110')}>T110</button>
                <button onClick={() => handleFilterClick('T90')}>T90</button>
                <button onClick={() => handleFilterClick('TJ')}>TJ</button>
            </div>
            <div className="car-grid-allAll1">
                {filteredCars.slice(0, 12).map(car => (
                    <div key={car.id} className="car-card-allAll1">
                        <img src={car.img} alt={car.name} />
                        <div className="car-detailsAll1">
                            <h2>{car.name}</h2>
                            <p>{car.price}</p>
                            <a href="/modelsT" className="car-details-allAll1-a">LearnMore</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCarAvailableVehicles;
