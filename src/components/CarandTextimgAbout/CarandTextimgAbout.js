import React from "react";
import './CarandTextimgAbout.modules.css';

import cardandtextimg from '../../assets/images/history-quote-bg-desktop.jpg';
import signature from '../../assets/images/signature.png';

const CarandTextimgAbout = () => {
    return (
        <div className="carandtextimgabout">
            <img src={cardandtextimg} alt="cardandtextimg" className="cardandtextimgabt" />
            <div className="sing-and-text-abt">
                <img src={signature} alt="signature" className="signature" />
                <p className="signature-PTAG">I grew up immersed in the world of Land Rover and 4×4s, testing their limits and understanding their ﬂaws. When the opportunity arose, I transformed my passion into a vision for Twisted, aiming to elevate Defenders to unprecedented levels of prestige, quality, and mechanical excellence—creating a market where comfort, power, and heritage coexist.</p>
            </div>
        </div>
    )
}

export default CarandTextimgAbout;
