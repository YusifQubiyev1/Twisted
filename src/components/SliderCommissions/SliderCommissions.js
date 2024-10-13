import React from "react";
import './SliderCommissions.modules.css';

import DSC from '../../assets/images/hero-comissions.jpg'

const SliderCommissions = () => {
    return (
        <div className="imagecar-container">
            <img src={DSC} alt="DSC" className="t130models" />
            <div className="overlay-content">
                <h1 className="SliderConversionsH1">FROM THE GROUND UP</h1>
                <p className="SliderCommissionsPTAG">
                    CUSTOM BUILD PROCESS, EXPLAINED
                </p>
            </div>
        </div>
    );
}

export default SliderCommissions;