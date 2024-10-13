import React from "react";
import { Link } from 'react-router-dom';
import './SliderConversions.modules.css';

import DSC from '../../assets/images/DSC_3694-min.jpg'

const SliderConversions = () => {
    return (
        <div className="imagecar-container">
            <img src={DSC} alt="DSC" className="t130models" />
            <div className="overlay-content">
                <h1 className="SliderConversionsH1">make the best, better</h1>
                <p className="error-back-commissions error-back-SliderConversions">
                    <Link to="/contact">turn your defender into a Twisted</Link>
                </p>
            </div>
        </div>
    );
}

export default SliderConversions;