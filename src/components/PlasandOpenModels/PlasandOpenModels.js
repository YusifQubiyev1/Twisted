import React, { useState } from 'react';
import './PlasandOpenModels.modules.css';

const PlasandOpenModels = () => {
  const [isPerformanceOpen, setIsPerformanceOpen] = useState(false);
  const [isInteriorOpen, setIsInteriorOpen] = useState(false);
  const [isExteriorOpen, setIsExteriorOpen] = useState(false);

  const togglePerformance = () => setIsPerformanceOpen(!isPerformanceOpen);
  const toggleInterior = () => setIsInteriorOpen(!isInteriorOpen);
  const toggleExterior = () => setIsExteriorOpen(!isExteriorOpen);

  return (
    <div className="plas-open-container">
      {/* Core Section */}
      <div className="core-section">
        <h2 className='h221'>Core</h2>
        <p>DEFENDER 130 XS DONOR VEHICLE IN YOUR CHOICE OF BODY STYLE</p>
        <p>AIR CONDITIONING</p>
        <p>REMOTE ALARM AND CENTRAL LOCKING</p>
        <p>ELECTRIC FRONT WINDOWS</p>
        <p>HEATED FRONT AND REAR WINDSCREENS</p>
        <p>TUBULAR SIDE STEPS</p>
      </div>

      {/* Performance Section */}
      <div className="section-toggle">
        <h3 onClick={togglePerformance}>
          PERFORMANCE <span>{isPerformanceOpen ? '-' : '+'}</span>
        </h3>
        {isPerformanceOpen && (
          <div className="section-content">
            <p>Increased horsepower and torque.</p>
            <p>Twisted-designed stainless steel exhaust and intercooler.</p>
          </div>
        )}
      </div>

      {/* Interior Section */}
      <div className="section-toggle">
        <h3 onClick={toggleInterior}>
          INTERIOR <span>{isInteriorOpen ? '-' : '+'}</span>
        </h3>
        {isInteriorOpen && (
          <div className="section-content">
            <p>Luxury leather trim, premium sound system.</p>
            <p>Enhanced interior detailing.</p>
          </div>
        )}
      </div>

      {/* Exterior Section */}
      <div className="section-toggle">
        <h3 onClick={toggleExterior}>
          EXTERIOR <span>{isExteriorOpen ? '-' : '+'}</span>
        </h3>
        {isExteriorOpen && (
          <div className="section-content">
            <p>Upgraded wheels and tires.</p>
            <p>Improved exterior protection features.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlasandOpenModels;
