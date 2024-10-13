import React from "react";
import './CarImgThreeConversions.modules.css';

import carthree1 from '../../assets/images/DSC_3686-min.jpg';
import carthree2 from '../../assets/images/DSC_3676-min.jpg';
import carthree3 from '../../assets/images/DSC_3699-min.jpg';

const CarImgThreeConversions = () => {
    return (
        <div className="CarImgThreeConversions">
            <img src={carthree1} alt="carthree1" />
            <img src={carthree2} alt="carthree2" />
            <img src={carthree3} alt="carthree3" />
        </div>
    )
}


export default CarImgThreeConversions;