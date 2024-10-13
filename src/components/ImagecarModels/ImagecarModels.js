import React from "react";
import { Link } from 'react-router-dom';
import './ImagecarModels.modules.css';

import t130models from '../../assets/images/T130-Desktop-Hero.jpg'

const ImagecarModels = () => {
    return (
        <div className="imagecar-container">
            <img src={t130models} alt="t130models" className="t130models" />
            <div className="overlay-content">
                <h1>Big and Bold</h1>
                <p className="error-back-commissions">
                    <Link to="/home">Home Back</Link>
                </p>
            </div>
        </div>
    );
}

export default ImagecarModels;