import React from "react";
import './ImgandTextCommissions.modules.css';

import ImgCommissions1 from '../../assets/images/image-1.jpg'
import ImgCommissions2 from '../../assets/images/image-2.jpg'
import ImgCommissions3 from '../../assets/images/image-3.jpg'
import ImgCommissions4 from '../../assets/images/image-1-1-1-1.jpg'
import ImgCommissions5 from '../../assets/images/image-2-1.jpg'
import ImgCommissions6 from '../../assets/images/image-3-1.jpg'


const ImgandTextCommissions = () => {
    return (
        <div>
            <div className="ImgandTextCommissions-imgs">
                <img src={ImgCommissions1} alt="ImgCommissions1" />
                <img src={ImgCommissions2} alt="ImgCommissions2" />
                <img src={ImgCommissions3} alt="ImgCommissions3" />
                <img src={ImgCommissions4} alt="ImgCommissions4" />
                <img src={ImgCommissions5} alt="ImgCommissions5" />
                <img src={ImgCommissions6} alt="ImgCommissions6" />
            </div>
            
            <div className="ImgandTextCommissions-texts">
                <p>We begin with the foundation of a classic off-roader, carefully sourced either by you or by our expert team. From timeless icons to rugged favourites, the choice is yours. We lay the groundwork with a vehicle that embodies the spirit of adventure.</p>
                <p>The Twisted Commissions experience is all about you. We sit down with you to understand your desires, your aspirations, and the purpose you envision for your custom vehicle. Whether you crave off-road dominance, urban sophistication, or a perfect blend of both, your Commission is tailored to perfection</p>
                <p>Throughout the process, you have the opportunity to monitor progress, engage with your personal technician, and, at your convenience, visit the commission suite to inspect your masterpiece. Comprehensive documentation is maintained at each stage, and upon completion, a personalised file is created and shared with you.</p>
            </div>
        </div>
    )
}

export default ImgandTextCommissions;