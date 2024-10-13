import React from "react";
import { Link } from 'react-router-dom';
import './SliderServicing.modules.css';

import DSC from '../../assets/images/TWISTED-Factory-Tech-64-2.jpg'

const SliderConversions = () => {
    return (
        <div className="imagecar-container">
            <img src={DSC} alt="DSC" className="t130models" />
            <div className="overlay-content">
                <h1 className="SliderConversionsH1 SliderServicingH1">YOU KNOW GOOD HANDS</h1>
                <p className="error-back-commissions error-back-SliderConversions">
                    <Link to="/contact">GET IN TOUCH TO BOOK A SERVICE</Link>
                </p>
            </div>
        </div>
    );
}

export default SliderConversions;