import React from "react";
import './TextandImgModelsT.modules.css';

import Modelstimg1 from '../../assets/images/GFW_6069-scaled.jpg';
import Modelstimg2 from '../../assets/images/GFW_6260-scaled.jpg';
import Modelstimg3 from '../../assets/images/GFW_6195-scaled.jpg';
import Modelstimg4 from '../../assets/images/GFW_6164-scaled.jpg';

const TextandImgModelsT = () => {
    return (
        <div className="text-and-img-models">
            <div className="text-section">
                <h1>T110</h1>
                <p className="subtitle">TWISTED T110 – COMMISSION YOURS</p>
                <p className="petrol-model">PETROL MODEL</p>
                <p className="question">What would your perfect icon be like?</p>
                <p className="twisted-t110">The Twisted T110</p>
                <p className="capacity">From 4 to 9 seating capacity</p>
                <p className="engine-specs">2.3l Turbocharged or 6.2l Naturally Aspirated Petrol Engine with Auto Transmission Specified by you.</p>
                <p className="description">
                    Subtly eye-catching or bold to make a statement. Powerful with handling characteristics, unlike anything you’ve driven before, engaging but refined, a daily driver, a workhorse, or a weekend warrior.
                    <br /><br />
                    A Twisted Commission build can be any of these things and more, yet it’s engineered to retain the charm and integrity of this legendary 4×4. The limitations are your imagination and it’s built to be as individual as you.
                    <br /><br />
                    Your design is finalized, a build slot is secured, a schedule is set and a Twisted Master Technician is assigned to your build. Every detail is meticulously inspected and pre-planned before your build is started.
                </p>
                <p className="chassis-info">
                    A donor vehicle is hand-picked and verified as suitable for your dream creation. In Yorkshire, we build a new body using brand-new panels. Meticulous detail is afforded to panel alignment before it is seam sealed, soundproofed, and sent to our paintshop to be expertly painted in the finish of your choice. A one-of-a-kind interior is crafted in the UK and fitted in-house, using the finest materials available, completing the body element of the build.
                </p>
                <p className="final-steps">
                    The chassis is fully restored, every nut, bolt, washer, and bush is replaced and upgraded where required. It then receives upgraded driveline components, suspension, brakes, and a new engine and gearbox before final assembly by our U.S. team when the body arrives. Each vehicle receives 500 test miles to ensure everything is perfect before being valeted and detailed.
                </p>
                <p className="contact">
                    Speak to our team today to discuss building yours.
                </p>
            </div>
            <div className="image-section">
                <img src={Modelstimg1} alt="Modelstimg1" />
                <img src={Modelstimg2} alt="Modelstimg2" />
                <img src={Modelstimg3} alt="Modelstimg3" />
                <img src={Modelstimg4} alt="Modelstimg4" />
            </div>
        </div>
    );
};

export default TextandImgModelsT;
