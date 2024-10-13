import React from "react";
import './MountainandOtherImgCommunity.modules.css';
import { Link } from 'react-router-dom';

import mountainCommimg1 from '../../assets/images/image-1-1.jpg';
import mountainCommimg2 from '../../assets/images/image-2-11.jpg';
import mountainCommimg3 from '../../assets/images/image-3-11.jpg';
import mountainCommimg4 from '../../assets/images/image-4-11.jpg';

const MountainandOtherImgCommunity = () => {
    return (
        <div className="mountainCom-container">
            <div className="mountainCom-item">
                <img src={mountainCommimg1} alt="mountainCommimg1" className="mountainCom-img" />
                <div className="mountainCom-overlay">
                    <h1>EXPERIENCES</h1>
                    <Link to='/contact' className="mountainCom-link">FIND OUT MORE</Link>
                </div>
            </div>
            <div className="mountainCom-item">
                <img src={mountainCommimg2} alt="mountainCommimg2" className="mountainCom-img" />
                <div className="mountainCom-overlay">
                    <h1>LOCATIONS</h1>
                    <Link to='/about' className="mountainCom-link">FIND OUT MORE</Link>
                </div>
            </div>
            <div className="mountainCom-item">
                <img src={mountainCommimg3} alt="mountainCommimg3" className="mountainCom-img" />
                <div className="mountainCom-overlay">
                    <h1>EVENTS</h1>
                    <Link to='/contact' className="mountainCom-link">FIND OUT MORE</Link>
                </div>
            </div>
            <div className="mountainCom-item">
                <img src={mountainCommimg4} alt="mountainCommimg4" className="mountainCom-img" />
                <div className="mountainCom-overlay">
                    <h1>GALLERY</h1>
                    <Link to='/gallery' className="mountainCom-link">VIEW</Link>
                </div>
            </div>
        </div>
    )
}

export default MountainandOtherImgCommunity;
