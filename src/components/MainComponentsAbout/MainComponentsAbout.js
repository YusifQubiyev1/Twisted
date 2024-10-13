import React from "react";
import './MainComponentsAbout.modules.css';
import { Link } from "react-router-dom";

import bacgroundAbt from '../../assets/images/Rectangle-40-1.jpg';
import logo1 from '../../assets/images/twisted-logo-copyright.png';
import logo from '../../assets/images/logo.svg';
import abt1 from '../../assets/images/abtfirst.jpg';
import abt2 from '../../assets/images/abtsecond.jpg';
import abt3 from '../../assets/images/abtthreed.jpg';
import abt4 from '../../assets/images/abtlast.jpg';
import abtgirl1 from '../../assets/images/abtnGirl1.jpg';
import abtgirl2 from '../../assets/images/abtGirl2.jpg';
import abt12 from '../../assets/images/old-cinema.jpg';
import abt13 from '../../assets/images/image-221.jpg';
import abt14 from '../../assets/images/yeti-copy.jpg';
import abt15 from '../../assets/images/car.jpg';
import abt16 from '../../assets/images/image_car-1-1-1.png';
import abt17 from '../../assets/images/Rectangle-39-11.png';
import abt19 from '../../assets/images/twisted-image.jpg';
import abt20 from '../../assets/images/section-3-image-large.jpg';
import abt21 from '../../assets/images/1-1.jpg';
import abt22 from '../../assets/images/2-1.jpg';
import abt23 from '../../assets/images/3-1.jpg';
import abt24 from '../../assets/images/4-1.jpg';
import abt25 from '../../assets/images/section-3-image-medium-2.jpg'
import abt26 from '../../assets/images/section-3-image-medium2.jpg'




const MainComponentsAbout = () => {
    return (
        <section className="MainAboutSection">
            <div>
                <div className="Abt-first-backg">
                    <img src={bacgroundAbt} alt="bacgroundAbt" className="background-image" />
                    <div className="Abt-first-backg-div">
                        <img src={logo1} alt="logo" className="logo-center" />
                        <p>THE OLD CINEMA – TWISTED HQ</p>
                    </div>
                </div>
                <div className="Abt-first-backg-imgs4">
                    <img src={abt12} alt="abt1" />
                    <img src={abt13} alt="abt2" />
                    <img src={abt14} alt="abt3" />
                    <img src={abt15} alt="abt4" />
                </div>
                <div className="Abt-first-backg-texts6">
                    <p>SHOWROOM</p>
                    <p>SALES</p>
                    <p>CAFE</p>
                    <p>GOODS</p>
                    <p>DETAIL</p>
                    <p>FINAL ASSEMBLY</p>
                </div>
                <div className="Abt-first-backg-imgs2">
                    <img src={abt16} alt="abtgirl1" />
                    <img src={abt17} alt="abtgirl2" />
                </div>
                <div>
                    <div className="center-content">
                        <img src={logo} alt="logo" className="logo-conversions" />
                        <p className="CaM-ptag">THE OLD CINEMA – TWISTED HQ</p>
                    </div>

                    <div className="PTag-Cs">
                        <p>Nestled in Thirsk, North Yorkshire, Twisted’s showroom is a unique blend of automotive excellence and rich history. Once a 1920s cinema, the venue now houses Twisted stock and a workshop in a space that seamlessly integrates past and present.</p>
                        <p>In 2020, Twisted revitalised the cinema screen, added a coffee bar, and transformed the venue into an 8000-square-foot haven. From its days as the Gaiety Theatre to a garage, the building has a diverse history that Twisted honours through meticulous restoration.</p>
                        <p>Uncovering handwritten messages from previous engineers’, and restoring the theatre screen, the premises embodies Twisted’s commitment to “Remake History.” Curated with apparel, boutique beauty products, and exceptional vehicles, it invites visitors to immerse themselves in the Twisted lifestyle. Come, enjoy a coffee, and let history and automotive passion converge in this extraordinary Thirsk space.</p>
                    </div>

                    <p className="CaM-ptag CSPtag">FIND A DEALER</p>
                    <div className="btn-CaM abtbtnboot"><Link to="/contact" className="btn-commissions-cm">GET İN TOUCH</Link></div>
                </div>
            </div>

            <div>
                <div className="Abt-first-backg">
                    <img src={abt19} alt="bacgroundAbt" className="background-image" />
                    <div className="Abt-first-backg-div">
                        <img src={logo1} alt="logo" className="logo-center" />
                        <p>FACTORY</p>
                    </div>
                </div>
                <div className="Abt-first-backg-imgs4">
                    <img src={abt1} alt="abt1" />
                    <img src={abt2} alt="abt2" />
                    <img src={abt3} alt="abt3" />
                    <img src={abt4} alt="abt4" />
                </div>
                <div className="Abt-first-backg-texts6">
                    <p>LOGISTICS</p>
                    <p>PARTS</p>
                    <p>PREPARATION</p>
                    <p>PAINT</p>
                    <p>UPHOLSTERY</p>
                    <p>ASSEMBLY</p>
                </div>
                <div className="Abt-first-backg-imgs2">
                    <img src={abtgirl1} alt="abtgirl1" />
                    <img src={abtgirl2} alt="abtgirl2" />
                </div>
                <div>
                    <div className="center-content">
                        <img src={logo} alt="logo" className="logo-conversions" />
                        <p className="CaM-ptag">FACTORY</p>
                    </div>

                    <div className="PTag-Cs">
                        <p>Welcome to the heart of Twisted, where automotive dreams take shape – our North Yorkshire Factory. With nine dedicated vehicle ramps and a team of highly skilled technicians, this dynamic space is a hub of constant activity, dedicated to crafting the distinctive builds that have defined our 21 years in the industry.</p>
                        <p>Our skilled technicians, armed with years of experience and passion for perfection, bring each vehicle to life with meticulous attention to detail. The factory is not merely a workspace; it’s a haven where the essence of the Twisted brand is infused into every vehicle that rolls off the line. Over two decades in business, we’ve proudly witnessed our bespoke Defenders shipped, flown, or driven to every corner of the globe.</p>
                        <p>It also houses an expansive parts storage facility, there is also a dedicated area for full leather customisation. Here, skilled artisans meticulously transform raw hides into the tailored pieces needed for each specific vehicle. It’s a fusion of craftsmanship and customisation, ensuring that every Twisted vehicle is not just a mode of transportation but a unique expression of its owner’s style and preferences.</p>
                    </div>

                    <p className="CaM-ptag CSPtag">COME SAY HI</p>
                    <div className="btn-CaM abtbtnboot"><Link to="/contact" className="btn-commissions-cm">GET İN TOUCH</Link></div>
                </div>
            </div>

            <div>
                <div className="Abt-first-backg">
                    <img src={abt20} alt="bacgroundAbt" className="background-image" />
                    <div className="Abt-first-backg-div">
                        <img src={logo1} alt="logo" className="logo-center" />
                        <p>THE LONDON MEWS</p>
                    </div>
                </div>
                <div className="Abt-first-backg-imgs4">
                    <img src={abt21} alt="abt1" />
                    <img src={abt22} alt="abt2" />
                    <img src={abt23} alt="abt3" />
                    <img src={abt24} alt="abt4" />
                </div>
                <div className="Abt-first-backg-texts6">
                    <p>SHOWROOM</p>
                    <p>SALES</p>
                    <p>GOODS</p>
                    <p>COMMUNITY</p>
                    {/* <p>DETAIL</p>
                    <p>FINAL ASSEMBLY</p> */}
                </div>
                <div className="Abt-first-backg-imgs2">
                    <img src={abt25} alt="abtgirl1" />
                    <img src={abt26} alt="abtgirl2" />
                </div>
                <div>
                    <div className="center-content">
                        <img src={logo} alt="logo" className="logo-conversions" />
                        <p className="CaM-ptag">THE LONDON MEWS</p>
                    </div>

                    <div className="PTag-Cs">
                        <p>Nestled within a picturesque traditional cobbled mews, between the bustling Kensington High Street and the renowned Cromwell Road, is our distinguished London Base. Rich in history and character, this locale was once utilised as coach houses and stabling for the opulent residences on Lexham Gardens. Today, it stands as an exclusive home to a curated selection of unique Twisted builds, encapsulating the essence of automotive craftsmanship and innovation.</p>
                        <p>This enclave, with its historical roots echoing through the cobbled pathways, offers more than just a showroom; it is an experiential hub designed to elevate the Twisted customer experience. Each vehicle tells a story of meticulous craftsmanship and attention to detail, a testament to Twisted’s commitment to excellence. Moreover, Twisted London serves as a dynamic platform for those seeking to immerse themselves in the Twisted lifestyle. Test drives, carefully curated and available by appointment, allow enthusiasts to feel the power, precision, and luxury that define Twisted creations.</p>
                    </div>

                    <p className="CaM-ptag CSPtag">BOOK AN APPOINTMENT</p>
                    <div className="btn-CaM"><Link to="/contact" className="btn-commissions-cm">GET İN TOUCH</Link></div>
                </div>
            </div>
        </section>
    );
}

export default MainComponentsAbout;
