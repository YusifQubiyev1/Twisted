import React from "react";
import './SliderAbout.modules.css';

import DSC from '../../assets/images/hero-about-1.jpg'

const SliderAbout = () => {
    return (
        <div className="imagecar-container">
            <img src={DSC} alt="DSC" className="t130models" />
            <div className="overlay-content">
                <h1 className="SliderConversionsH1">LED BY PASSION</h1>
                <p className="SliderCommissionsPTAG">
                    CHARLES FAWCETT, FOUNDER
                </p>
            </div>
        </div>
    );
}

export default SliderAbout;