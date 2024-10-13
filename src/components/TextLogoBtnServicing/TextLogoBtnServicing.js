import React from "react";
import './TextLogoBtnServicing.modules.css';
import { Link } from 'react-router-dom';


import logo from '../../assets/images/logo.svg';


const TextLogoBtnServicing = () => {
    return (
        <div>
            <div className="center-content">
                <img src={logo} alt="logo" className="logo-conversions" />
                <p className="CaM-ptag">SERVICING</p>
            </div>

            <div className="PTag-Cs">
                <p>Just like every human, each Defender is different. Imperfect. We grew up with its flaws, and that’s why we love them. Our team’s obsession with restored and modified Land Rover Defender spans two decades. We know these cars inside and out, and we care about them like family. Whether your vehicle needs its annual service and an MOT, or is showing signs of its age and needs some remedial repairs or maintenance, you can rest assured that your Defender is in the best set of hands.</p>
                <p>We service anything from a 1948 Series I to a 2016 Defender, whether it’s Twisted or standard. We are able to carry out all aspects of service and repair works, and do all our work in-house at our factory in Thirsk, Yorkshire. After your car is finished, you will receive a stamped service sheet, and we recommend you come back to us a year later to keep that consistency. If you have purchased a new vehicle from us, your Twisted will come supplied with 12 months service.</p>
            </div>

            <p className="CaM-ptag CSPtag">book your service</p>
            <div className="btn-CaM"><Link to="/contact" className="btn-commissions-cm">GET İN TOUCH</Link></div>
        </div>
    )
}


export default TextLogoBtnServicing;