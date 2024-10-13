import React from 'react';
import './InfoCarsModelsT.modules.css';

const InfoCarsModelsT = () => {
  const coreFeatures = [
    'AIR CONDITIONING',
    'CENTRAL LOCKING',
    'ELECTRIC FRONT AND MIDDLE ROW WINDOWS',
    'LEATHER TRIMMED RECARO FRONT SEAT',
    'UPGRADE AVAILABLE',
    'HEATED FRONT AND REAR WINDSCREENS',
    '5 OR 7 SEATS AVAILABLE',
  ];

  const performanceFeatures = [
    'T-V8 (GM LT1) CONVERSION',
    '8 SPEED AUTOMATIC TRANSMISSION',
    'FULL UPGRADE TO DRIVELINE (DIFFERENTIALS, DRIVE SHAFTS, HALF SHAFTS, FLANGES)',
    'LONG RANGE FUEL TANK',
    '6 POT PERFORMANCE FRONT BRAKES',
    '4 POT PERFORMANCE REAR BRAKES',
    'UPGRADED INTERCOOLER',
    'CERCOATED STAINLESS STEEL EXHAUST SYSTEM',
    'PROGRESSIVE SUSPENSION SYSTEM WITH LEVELLED REAR-END OPTION',
  ];

  const interiorFeatures = [
    'TWISTED INTERIOR TRIM IN A LEATHER OF YOUR CHOICE',
    'LEATHER TRIMMED RECARO FRONT SEAT UPGRADE AVAILABLE',
    'LEATHER TRIMMED MIDDLE ROW SEAT UPGRADE AVAILABLE',
    'TWISTED TRIMMED LEATHER WINDOW SURROUNDS',
    'COLOUR CODED CENTRE DASH PANEL AVAILABLE',
    'TWISTED LEATHER TO DOOR HANDLES',
    'TWO TONE DASH LEATHER AVAILABLE',
    'PRIVACY GLASS TO REAR WINDOWS',
    'CHOICE OF TWISTED CLASSIC STEERING WHEELS',
    'CARPET TO FULL INTERIOR',
    'PANEL ALIGNMENT, SEALING & FULL INTERIOR SOUNDPROOFING',
    'ALCANTARA OR LEATHER HEADLINING & VISORS',
    'REVERSING CAMERA',
    '8 CHANNEL PREMIUM AUDIO COMPONENT SYSTEM',
    'LED INTERIOR DOWNLIGHTING',
    'LOADSPACE DRAWER',
    'REAR FACING INTERIOR LIGHT',
    'SOFT TOUCH INTERIOR PANELS',
  ];

  const exteriorFeatures = [
    'CHOICE OF 18" TWISTED ALLOY WHEELS',
    'CHOICE OF ROAD/OFF-ROAD TYRES',
    'BODY COLOURED ROOF',
    'ALUMINIUM FRONT BUMPER WITH INTEGRATED LAZER DRIVING LIGHTS',
    'UPGRADED LED HEADLIGHTS AND SIDE LIGHTS',
    '95MM LED LIGHTS TO REAR WITH RED STOP LIGHTS',
    'TWISTED 6MM STEERING GUARD FINISHED IN SATIN BLACK',
    'STAGE ONE FRONT END - UPGRADED SIDE AND TOP VENTS',
    'WINCH BUMPER WITH WARN 9.5 WINCH',
    'UPGRADED WIPER BLADES',
    'TUBULAR SIDE STEPS',
    'LAZER REAR WORKLIGHT',
  ];

  return (
    <div className="info-cars-models-container">
      <div className="info-column">
        <h2>CORE</h2>
        <ul>
          {coreFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="info-column">
        <h2>PERFORMANCE</h2>
        <ul>
          {performanceFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="info-column">
        <h2>INTERIOR</h2>
        <ul>
          {interiorFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="info-column">
        <h2>EXTERIOR</h2>
        <ul>
          {exteriorFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoCarsModelsT;
