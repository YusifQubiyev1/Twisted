import React from "react";
import './PicturesFlexs.modules.css';

import logo from '../../assets/images/logo.svg';
import pic1 from '../../assets/images/TWISTED-column-locations.jpg'
import pic2 from '../../assets/images/TWISTED-Showroom-night-flash-58.jpg'
import pic3 from '../../assets/images/TWISTED-SCOTLAND-NICK-CARO-NC50089.jpg'
import pic4 from '../../assets/images/TWISTED-SCOTLAND-NICK-CARO-NC50017.jpg'
import pic5 from '../../assets/images/TWISTED-INDIA-TEST-2-1.jpg'


const PicturesFlexs = () => {
    return (
        <div>
            <div className="logo-section">
                <img src={logo} alt="Company Logo" className="logo" />
                <p className="logo-text">Community</p>
            </div>
            <div className="picturesflexCard">
                <div>
                    <img src={pic1} alt="pic1" className="firtpicpf" />
                    <p>SOCIAL</p>
                </div>
                <div>
                    <img src={pic2} alt="pic2" />
                    <p>Experiences</p>
                </div>
                <div>
                    <img src={pic3} alt="pic3" />
                    <p>Locations</p>
                </div>
                <div>
                    <img src={pic4} alt="pic4" />
                    <p>Events</p>
                </div>
                <div>
                    <img src={pic5} alt="pic5"  className="firtpicpf"  />
                    <p>Gallery</p>
                </div>

            </div>
        </div>
    )
}

export default PicturesFlexs;