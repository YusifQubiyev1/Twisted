import React from "react";
import './PickupImageModels.modules.css';

import logomodels from '../../assets/images/logo.svg';
import pickupimgmodels from '../../assets/images/T130-model.jpg';

const PickupImageModels = () => {
    return (
        <div className="image-container">
            <img src={pickupimgmodels} alt="pickupimgmodels" className="background-image" />
            <img src={logomodels} alt="logomodels" className="overlay-logo" />
        </div>
    );
}

export default PickupImageModels;
