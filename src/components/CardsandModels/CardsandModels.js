import React from "react";
import './CardsandModels.modules.css';
import { Link } from 'react-router-dom';

import car1 from '../../assets/images/4-2-cropped.jpg'
import car2 from '../../assets/images/3-2-cropped.jpg'
import car3 from '../../assets/images/2-2-cropped.jpg'
import car4 from '../../assets/images/1-2-cropped.jpg'


const CardsandModels = () => {
    return (
        <div>
            <p className="CaM-ptag">FIND OUT MORE</p>
            <div className="cars-CaM">
                <div>
                    <img src={car1} alt="car1" />
                    <Link to="/commissions">Commissions</Link>
                </div>
                <div>
                    <img src={car2} alt="car2" />
                    <Link to="/error">Originals</Link>
                </div>
                <div>
                    <img src={car3} alt="car3" />
                    <Link to="/conversions">Conversions</Link>
                </div>
                <div>
                    <img src={car4} alt="car4" />
                    <Link to="/availablevehicles">Available Vehicles</Link>
                </div>
            </div>

            <p className="CaM-ptag">GET IN TOUCH TO LEARN MORE</p>
            <div className="btn-CaM"><Link to="/contact" className="btn-commissions-cm">CHAT TO THE TEAM</Link></div>
        </div>
    )
}


export default CardsandModels;