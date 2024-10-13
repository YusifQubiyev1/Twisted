import React, { useState } from 'react';
import './MailContact.modules.css';

const MailContact = () => {
    const [countryCode, setCountryCode] = useState('');
    const countryCodes = ['+1', '+3', '+40', '+44', '+52', '+66', '+77', '+91', '+994'];

    return (
        <div className="mail-contact">
            <div className='mail-contact-second-div'>
                <h1>GET IN TOUCH</h1>
                <p>Reach out and let's chat. We are here to help with all enquiries</p>

                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" name="first-name" placeholder="*FIRST NAME" required />
                        <input type="text" name="last-name" placeholder="*LAST NAME" required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="*EMAIL" required />
                    </div>
                    <div className="form-group">
                        <select
                            name="country-code"
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            required
                            className="country-code-select"
                        >
                            <option value="">*COUNTRY CODE</option>
                            {countryCodes.map((code, index) => (
                                <option key={index} value={code}>{code}</option>
                            ))}
                        </select>
                        <input
                            type="tel"
                            name="telephone"
                            placeholder="*TELEPHONE NUMBER"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" name="subject" placeholder="*PLEASE ADD A SUBJECT" required />
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="*YOUR MESSAGE" required />
                    </div>
                    <button type="submit" className="submit-btn">SEND</button>
                </form>
            </div>
        </div>
    );
};

export default MailContact;
