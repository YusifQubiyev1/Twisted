import React from "react";
import './ImgCollageModels.modules.css';

import collageimgmodles1 from '../../assets/images/0000_1.jpg.jpg';
import collageimgmodles2 from '../../assets/images/0001_2.jpg.jpg';
import collageimgmodles3 from '../../assets/images/Group-23@2x-1-1.jpg';
import collageimgmodles4 from '../../assets/images/Group-26@2x.jpg';

const ImgCollageModels = () => {
    return (
        <div className="collage-container">
            <img src={collageimgmodles1} alt="collageimgmodles1" className="collage-img" />
            <img src={collageimgmodles2} alt="collageimgmodles2" className="collage-img" />
            <img src={collageimgmodles3} alt="collageimgmodles3" className="collage-img" />
            <img src={collageimgmodles4} alt="collageimgmodles4" className="collage-img" />
        </div>
    );
}

export default ImgCollageModels;
