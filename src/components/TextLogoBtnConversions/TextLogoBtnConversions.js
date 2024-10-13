import React from "react";
import './TextLogoBtnConversions.modules.css';
import { Link } from 'react-router-dom';


import logo from '../../assets/images/logo.svg';


const TextandCarsimgModels = () => {
    return (
        <div>
            <div className="center-content">
                <img src={logo} alt="logo" className="logo-conversions" />
                <p className="CaM-ptag">CONVERSIONS</p>
            </div>

            <div className="PTag-Cs">
                <p>Whether you have owned your vehicle for five minutes or 20 years, it is likely that there are things that you love and things you’re not so fond of. Our conversions can consist of anything from the replacement of a steering wheel for one of our classic leather options with slimline boss, right up to a complete rebuild and a full Twisted vehicle proudly wearing our Yorkshire plaques.</p>
                <p>Following the same ethos as our commissioned build, you will have one of our master technicians assigned to your conversion and only they will work on your vehicle. Throughout the work we will work with you to tailor the specification, giving you a vehicle that makes you smile every day. We can’t wait to welcome you into our Twisted world and hear about all of your adventures, because every build is special, every story is different and whether it’s your first Defender or your fiftieth, it is most certainly the one you’ll want to keep forever.</p>
            </div>

            <p className="CaM-ptag CSPtag">start your journey</p>
            <div className="btn-CaM"><Link to="/contact" className="btn-commissions-cm">GET İN TOUCH</Link></div>
        </div>
    )
}


export default TextandCarsimgModels;