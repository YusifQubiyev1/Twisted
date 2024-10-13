import React from "react";
import './TextandImages.modules.css';

import img1 from '../../assets/images/GFW_6230-1-2.jpg'
import img2 from '../../assets/images/GFW_6164-2.jpg'
import img3 from '../../assets/images/GFW_6048-2.jpg'
import img4 from '../../assets/images/GFW_5913-2.jpg'




const TextandImages = () => {
    return (
        <div >
            <p className="TextandImagesPtag">Welcome to Twisted Automotive. Driven by our team’s obsession with excellence, Twisted redefines automotive luxury with a rebellious edge. Taking iconic vehicles like the Defender and Jimny, we craft bespoke masterpieces that defy convention. This is the best made better.</p>
            <div className="TextandImages">
                <div>
                    <img src={img1} alt="img1" />
                    <img src={img2} alt="img2" />
                    <img src={img3} alt="img3" />
                    <img src={img4} alt="img4" />
                </div>
            </div>
        </div>
    )
}


export default TextandImages;