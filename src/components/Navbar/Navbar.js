import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.modules.css';
import logo from '../../assets/images/logo.svg';
import ukFlag from '../../assets/images/gb.svg';
import usFlag from '../../assets/images/us.svg';
import jpFlag from '../../assets/images/jp.svg';
import T90 from '../../assets/images/Model-T90-small.png';  // Maşın şəkilləri
import T110 from '../../assets/images/Model-JapanBlackFront34-noshadow.png';
import T130 from '../../assets/images/Model-T130-noshadow.png';
import TJ from '../../assets/images/Model-JimnyTwFront-small.png';

const models = [
  { name: 'T90', image: T90, link: '/models' },
  { name: 'T110', image: T110, link: '/models' },
  { name: 'T130', image: T130, link: '/models' },
  { name: 'TJ', image: TJ, link: '/models' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModels, setShowModels] = useState(false);
  const [showFlags, setShowFlags] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModels = () => {
    setShowModels(!showModels);
  };

  const toggleFlags = () => {
    setShowFlags(!showFlags);
  };


  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrollPosition > 10 ? 'navbar-scrolled' : ''}`}>
      <div className="logo"><img src={logo} alt="Logo" className='logo-img' /></div>
      <div className="icons">
        <Link to="/error"><FontAwesomeIcon icon={faUser} size="2xl" style={{color: "#000000"}} /></Link>
        <Link to="/error"><FontAwesomeIcon icon={faBriefcase} size="2xl" style={{color: "#000000"}} /></Link>
        <div className="hamburger" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#000000"}} /></div>
        <div className="flag-uk" onClick={toggleFlags}> <img src={ukFlag} alt="UK Flag" /></div>
        {showFlags && (
          <div className="flags-dropdown">
            <Link to="/error"><div className="flag-uk"><img src={ukFlag} alt="UK Flag" /></div></Link>
            <Link to="/error"><div className="flag-us"><img src={usFlag} alt="US Flag" /></div></Link>
            <Link to="/error"><div className="flag-japan"><img src={jpFlag} alt="Japan Flag" /></div></Link>
          </div>
        )}
      </div>
      {isOpen && (
        <div className="menu">
          <Link onClick={toggleModels}>Models</Link>
          <Link to="/about">About</Link>
          <Link to="/commissions">Commissions</Link>
          <Link to="/conversions">Conversions</Link>
          <Link to="/availablevehicles">Available Vehicles</Link>
          <Link to="/servicing">Servicing</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/community">Community</Link>
          {showModels && (
            <div className="models-dropdown">
              {models.map((model) => (
                <Link to={model.link} key={model.name} className="model-item">
                  <img src={model.image} alt={model.name} className="model-image" />
                  {model.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
