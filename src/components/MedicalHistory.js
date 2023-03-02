import React from 'react';
import './medicalHistory.css';
import {GoFile} from "react-icons/go";

const MedicalHistory = () => {
  return (
    <div className='lastContainer'>
      <div className='historyBtns'>
        <button>Upcoming Appointments</button>
        <button>Past Appointments</button>
        <button>Medical Records</button>
      </div>
      <div className='infoContainer'>
        <div className='titleLine'>
            <p className='heroPara'>Root Canal Treatment</p>
            <button className='prevBtn'>Show Previous Treatment</button>
        </div>
        <div className='treatment'>
            <div className='dateTime'>
                <h2>26 Nov'19</h2>
                <p>09.00 - 10.00</p>
            </div>
            <div className='treatInfo'>
                <p className='smallTitle'>Treatment</p>
                <h3>Open Access</h3>
            </div>
            <div className='drHistory'>
                <div>
                    <p className='smallTitle'>Dentist</p>
                    <h5 className='dr'>Drg.Adam H.</h5>
                </div>
                <div>
                    <p className='smallTitle'>Nurse</p>
                    <h5 className='dr'>Jessicamila</h5>
                </div>
                <div className='note'>
                    <GoFile />
                    <p>Note</p>
                </div>
            </div>
        </div>
        <div className='treatment'>
            <div className='dateTime'>
                <h2>12 Nov'19</h2>
                <p>09.00 - 10.00</p>
            </div>
            <div className='treatInfo'>
                <p className='smallTitle'>Treatment</p>
                <h3>Root Canal</h3>
            </div>
            <div className='drHistory'>
                <div>
                    <p className='smallTitle'>Dentist</p>
                    <h5 className='dr'>Drg.Adam H.</h5>
                </div>
                <div>
                    <p className='smallTitle'>Nurse</p>
                    <h5 className='dr'>Jessicamila</h5>
                </div>
                <div className='note'>
                    <GoFile />
                    <p>Note</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalHistory
