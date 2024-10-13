import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Models from './pages/Models/Models';
import Conversions from './pages/Conversions/Conversions';
import Contact from './pages/Contact/Contact';
import Commissions from './pages/Commissions/Commissions';
import Servicing from './pages/Servicing/Servicing';
import ModelsT from './pages/ModelsT/ModelsT';
import Community from './pages/Community/Community';
import Gallery from './pages/Gallery/Gallery';
import AvailableVehicles from './pages/AvailableVehicles/AvailableVehicles';
import About from './pages/About/About';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path='/models' element={<Models />} />
          <Route path='/conversions' element={<Conversions />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/commissions' element={<Commissions />} />
          <Route path='/servicing' element={<Servicing />} />
          <Route path='/modelsT' element={<ModelsT />} />
          <Route path='/community' element={<Community />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/availablevehicles' element={<AvailableVehicles />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
