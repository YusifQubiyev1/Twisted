import React from "react";
import { Link } from 'react-router-dom';
import './SliderCommunity.modules.css';

import DSC from '../../assets/images/community-about-hero.jpg'

const SliderConversions = () => {
    return (
        <div className="imagecar-container">
            <img src={DSC} alt="DSC" className="t130models" />
            <div className="overlay-content">
                <h1 className="SliderConversionsH1 SliderServicingH1">JOIN OUR COMMUNITY</h1>
                <p className="error-back-commissions error-back-SliderConversions">
                    <Link to="/availablevehicles">@TWISTED_AUTOMOTIVE</Link>
                </p>
            </div>
        </div>
    );
}

export default SliderConversions;