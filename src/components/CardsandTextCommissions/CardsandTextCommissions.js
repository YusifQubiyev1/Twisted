import React from "react";
import './CardsandTextCommissions.modules.css';

import cardscommimg1 from '../../assets/images/1.jpg'
import cardscommimg2 from '../../assets/images/2.jpg'
import cardscommimg4 from '../../assets/images/4.jpg'
import cardscommimg5 from '../../assets/images/5.jpg'
import cardscommimg6 from '../../assets/images/6.jpg'
import cardscommimg7 from '../../assets/images/7.jpg'
import cardscommimg9 from '../../assets/images/9.jpg'
import cardscommimg10 from '../../assets/images/10.jpg'


const CardsandTextCommissions = () => {
    return (
        <div>
            <div className="CardsandTextCommissions-texts">
                <h1>HOW IT WORKS</h1>
                <p>these are the ten steps from beginning to end of your new custom twisted vehicle</p>
                <p>VEHICLES SHIPPED WORLDWIDE</p>
            </div>
            <div className="CardsandTextCommissions-cards">
                <div>
                    <img src={cardscommimg1} alt="cardscommimg1" />
                    <p>#1. GET IN TOUCH</p>
                </div>
                <div>
                    <img src={cardscommimg2} alt="cardscommimg2" />
                    <p>#2. CONSULTATION</p>
                </div>
                <div>
                    <img src={cardscommimg9} alt="cardscommimg3" />
                    <p>#3. QUOTATION</p>
                </div><div>
                    <img src={cardscommimg4} alt="cardscommimg4" />
                    <p>#4. AGREEMENT</p>
                </div><div>
                    <img src={cardscommimg5} alt="cardscommimg5" />
                    <p>#5. PAINT & TRIM</p>
                </div><div>
                    <img src={cardscommimg6} alt="cardscommimg6" />
                    <p>#6. DONOR VEHICLE</p>
                </div><div>
                    <img src={cardscommimg7} alt="cardscommimg7" />
                    <p>#7. BUILD UPDATES</p>
                </div><div>
                    <img src={cardscommimg2} alt="cardscommimg8" />
                    <p>#8. COMPLETE AND DELIVERY</p>
                </div><div>
                    <img src={cardscommimg9} alt="cardscommimg9" />
                    <p>#9. GET BEHIND THE WHEEL</p>
                </div><div>
                    <img src={cardscommimg10} alt="cardscommimg10" />
                    <p>#10. FOLLOW UP</p>
                </div>
            </div>
        </div>
    )
}

export default CardsandTextCommissions;