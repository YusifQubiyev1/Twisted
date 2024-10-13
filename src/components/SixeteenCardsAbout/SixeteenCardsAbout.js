import React from "react";
import './SixeteenCardsAbout.modules.css';

import logo from '../../assets/images/logo.svg';
import simg1 from '../../assets/images/Asset-1@2x-100.jpg';
import simg2 from '../../assets/images/Asset-11@2x-100.jpg';
import simg3 from '../../assets/images/Asset-15@2x-100.jpg';
import simg4 from '../../assets/images/Asset-17@2x-100.jpg';
import simg5 from '../../assets/images/Asset-18@2x-100.jpg';
import simg6 from '../../assets/images/Asset-20@2x-100.jpg';
import simg7 from '../../assets/images/Asset-31@2x-100.jpg';
import simg8 from '../../assets/images/Asset-32@2x-100.jpg';
import simg9 from '../../assets/images/Asset-35@2x-100.jpg';
import simg10 from '../../assets/images/Asset-4@2x-100.jpg';
import simg11 from '../../assets/images/Asset-7@2x-100.jpg';
import simg12 from '../../assets/images/Asset-3@2x-100.jpg';

const images = [
    simg1, simg2, simg3, simg4, simg5,
    simg6, simg7, simg8, simg9, simg10,
    simg11, simg12,
];

const SixeteenCardsAbout = () => {
    // Create a list of 36 images
    const allImages = [...images, ...images, ...images];

    return (
        <div className="sixteen-cards-about">
            <div className="logo-and-text-sixteen">
                <img src={logo} alt="logo" />
                <p>FAMILY</p>
            </div>
            <div className="cards-sixteen">
                {allImages.map((img, index) => (
                    <img key={index} src={img} alt={`simg${index + 1}`} />
                ))}
            </div>
            <p className="footer-text-sixteen">
                MAKING THE BEST, BETTER
            </p>
        </div>
    )
}

export default SixeteenCardsAbout;
