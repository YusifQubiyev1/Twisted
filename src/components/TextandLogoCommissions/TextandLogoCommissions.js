import React from "react";
import './TextandLogoCommissions.modules.css';


import logo from '../../assets/images/logo.svg';


const TextandLogoCommissions = () => {
    return (
        <div>
            <div className="center-content">
                <img src={logo} alt="logo" className="logo-conversions" />
                <p className="CaM-ptag">COMMISSIONS</p>
            </div>

            <div className="PTag-Cs">
                <p>Exclusive to a limited number of builds annually, you take charge and bring to life the vehicle of your dreams. Collaborating closely with our design team, you shape a vehicle that epitomises your uniqueness. Whether it’s a T90, T110, or T130, the possibilities are yours to explore. The design is finalised, a schedule is set, and a dedicated master technician is assigned to your project. Every facet is meticulously inspected and pre-planned before the build begins, ultimately overseen by your master technician.</p>
                <p>Every aspect is replaced and upgraded as needed. We make cars for your lifestyle – whether that’s off-roading adventures or inner-city bustle. Every feature, bolt, and stitch is meticulously chosen to suit your wants and bring your dream car into reality.</p>
                <p>Throughout the process, you have the opportunity to monitor progress, engage with your personal technician, and, at your convenience, visit the commission suite to inspect your masterpiece. Comprehensive documentation is maintained at each stage, and upon completion, a personalised file is created and shared with you. Your journey concludes with a personal delivery and handover by a member of the Twisted Team or collection from your chosen location.</p>
            </div>

        </div>
    )
}


export default TextandLogoCommissions;