import React from "react";
import './WaterCar.modules.css';
import { Link } from 'react-router-dom';

import watercarWC from '../../assets/images/GFW_7268.jpg';


const WaterCar = () => {
    return (
        <div className="container-WC">
            <div className="Ptag-btn-WC">
                <p>Make Every Journey an Adventure</p>
                <Link to="/contact" className="btn-commissions-WC">GET IN TOUCH</Link>
            </div>
            <div className="img-WC">
                <img src={watercarWC} alt="watercarWC" />
            </div>
        </div>

    )
}


export default WaterCar;