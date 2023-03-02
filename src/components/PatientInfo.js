import React from 'react';
import {GoFile} from 'react-icons/go';
import './patientInfo.css';

const PatientInfo = () => {
  return (
    <div className='mainDiv'>
      <div className='info'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLbep-KaorcsV0jf0WtgPpwHLrvh9ZDqRQA&usqp=CAU' alt='' className='patientImg'/>
        <h3 className='patientName'>Diane Cooper</h3>
        <p>diane.cooper@example.com</p>
        <div className='basicInfo'>
            <div>
            <h5>15</h5>
            <p>Past</p>
            </div>
            <div className='vl'></div>
            <div>
            <h5>02</h5>
            <p>Upcoming</p>
            </div>
        </div>
        <button className='sendBtn'>Send Message</button>
      </div>
      <div className='files'>
        <h5>Files/Documents</h5>
        <div className='docs'>
            <ul className='pdfs'>
                <li className='pdf'>
                <GoFile />
                <p>Check Up Results.pdf</p>
                </li>
                <li className='pdf'>
                <GoFile/>
                <p>Check Up Results.pdf</p>
                </li>
                <li className='pdf'>
                <GoFile/>
                <p>Clinical Prescription.pdf</p>
                </li>
                <li className='pdf'>
                <GoFile/>
                <p>Dental X-Ray Result.pdf</p>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default PatientInfo
