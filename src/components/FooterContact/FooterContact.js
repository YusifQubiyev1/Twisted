import React from "react";
import './FooterContact.modules.css';
import { Link } from 'react-router-dom';

import backgroundImage from '../../assets/images/contact-footer-desktop.jpg';
import logoWhite from '../../assets/images/twisted-logo-copyright.png';

const FooterContact = () => {
    return (
        <div className="footer-home footer-contact " style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="footer-content">
                <div className="contact-dealer">
                    <h2 className="FooterContact">COMMS ARE OPEN</h2>
                    <Link to="/contact" className="contact-button">CONTACT US</Link>
                </div>
                <div className="partners-info">
                    <div className="partner">
                        <h4>TWISTED HQ</h4>
                        <p>
                            THE OLD CINEMA<br />
                            38 LONG STREET, THIRSK<br />
                            NORTH YORKSHIRE YO7 1AW<br />
                            UNITED KINGDOM<br />
                            <a href="tel:+441845574990">+44 (0) 1845 574 990</a>
                        </p>
                    </div>
                    <div className="partner">
                        <h4>FACTORY</h4>
                        <p>
                            TWISTED FACTORY<br />
                            UNIT 1&2 SUSSEX COURT<br />
                            NORTH YORKSHIRE YO7 3TA<br />
                            UNITED KINGDOM<br />
                            <a href="tel:+441845574990">+44 (0) 1845 574 990</a>
                        </p>
                    </div>
                    <div className="partner">
                        <h4>TWISTED LONDON</h4>
                        <p>
                            21-23 RADLEY MEWS<br />
                            KENSINGTON, LONDON W8 6JP<br />
                            UNITED KINGDOM<br />
                            <a href="tel:+442039082995">+44 (0)203 908 2995</a>
                        </p>
                    </div>
                    <div className="partner">
                        <h4>TWISTED JAPAN</h4>
                        <p>
                            YONE JIDOSHA CO., LTD.<br />
                            1F HIGASHIAZABU ANNEX BUILDING<br />
                            1-10-13 HIGASHIAZABU, MINATO-KU<br />
                            TOKYO 106-0044<br />
                            <a href="tel:+81364265903">+81 03 6426 5903</a>
                        </p>
                    </div>
                </div>
                <div className="twisted-logo">
                    <img src={logoWhite} alt="logoWhite" />
                </div>
            </div>
        </div>
    );
}

export default FooterContact;
