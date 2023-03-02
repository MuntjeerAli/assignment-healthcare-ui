import React from 'react';
import Nav from './components/Nav.js';
import './App.css';
import PatientInfo from './components/PatientInfo.js';
import GeneralInfo from './components/GeneralInfo.js';
import MedicalHistory from './components/MedicalHistory.js';

const App = () => {
  return (
    <div className="homePage">
      <Nav/>
      <PatientInfo/>
      <div className='secondContainer'>
      <GeneralInfo/>
      <MedicalHistory/>
      </div>
      
    </div>
  )
}

export default App
