import React from "react";
import './ImgStarsServicing.modules.css';

import carthree1 from '../../assets/images/TWISTED-Factory-Tech-86-2.jpg';
import carthree2 from '../../assets/images/image-4-1.jpg';
import carthree3 from '../../assets/images/Rectangle-39-1.png';
import stars from '../../assets/images/stars.svg';

const ImgStarsServicing = () => {
    return (
        <div>
            <div className="CarImgThreeConversions">
                <img src={carthree1} alt="carthree1" />
                <img src={carthree2} alt="carthree2" />
                <img src={carthree3} alt="carthree3" />
            </div>
            <p className="ImgStarsServicing-PTAG">“Twisted Automotive are simply the best in the business. Their workmanship, attention to detail and service are beyond question. I have owned two Twisted Originals and have sent two other standard Defender to them for work over the 8 years I’ve dealt with them. I highly recommend Twisted Automotive for the most bespoke service you’ll ever experience!”</p>
            <div className='starsimgci starsimgci-is'>
                <img src={stars} alt='stars' />
                <img src={stars} alt='stars' />
                <img src={stars} alt='stars' />
                <img src={stars} alt='stars' />
                <img src={stars} alt='stars' />
                <p>five stars</p>
            </div>
        </div>
    )
}


export default ImgStarsServicing;