import React from "react";
import './ErrorComponent.modules.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import errorimg from '../../assets/images/404-desktop-bg.jpg';

const ErrorComponent = () => {
    return (
        <div className="ErrorComponent">
            <img src={errorimg} alt="errorimg" className="errorimg" />
            <div className="logo-errorpage">
                <img src={logo} alt="logo" />
                <p>Error page</p>
            </div>
            <div className="btn-text-errorpage">
                <p>404</p>
                <h4>Hey, nobody's perfect.</h4>
                <p>*LET'S GET YOU BACK ON THE RIGHT PATH</p>
                <p><Link to="/home">Home Page</Link></p>
            </div>
        </div>
    )
}


export default ErrorComponent;