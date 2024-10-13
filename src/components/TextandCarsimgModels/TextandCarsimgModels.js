import React from "react";
import './TextandCarsimgModels.modules.css';

import tcarsmodels1 from '../../assets/images/Group-15@2x-2-1.jpg';
import tcarsmodels2 from '../../assets/images/Group-18@2x-1.jpg';
import tcarsmodels3 from '../../assets/images/3-10.jpg';

const TextandCarsimgModels = () => {
    return (
        <div className="text-and-images-container">
            {/* First Section: Navigation Links */}
            <div className="nav-links">
                <p>Inventory</p>
                <p>Contact</p>
                <p>Gallery</p>
                <p>ORIGINALS</p>
                <p>Commissions</p>
            </div>

            <div className="images-row">
                <img src={tcarsmodels1} alt="tcarsmodels1" className="cars-image" />
                <img src={tcarsmodels2} alt="tcarsmodels2" className="cars-image" />
                <img src={tcarsmodels3} alt="tcarsmodels3" className="cars-image" />
            </div>

            <div className="description-text">
                <p>The T130 takes the spaciousness and functionality of the original Defender 130 to new heights. Its extended chassis not only enhances load capacity but also ensures stability and comfort, even when fully laden. This vehicle is a true workhorse, designed for those who need to transport heavy gear, whether it’s for work, exploration, or leisure.</p>
                <p>Under the bonnet lies a carefully enhanced engine, meticulously tuned to deliver increased horsepower and torque with a Twisted-designed stainless steel exhaust and upgraded intercooler. Our work on the original diesel power plant transforms its torque curve and horsepower figures, giving you confidence to overtake, cruise at motorway speeds, or make towing more pleasurable.</p>
            </div>
        </div>
    )
}

export default TextandCarsimgModels;
