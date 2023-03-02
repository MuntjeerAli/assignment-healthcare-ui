import React from 'react';
import './generalInfo.css';

const GeneralInfo = () => {
  return (
    <div className='generalInfo'>
      <div className='listOne'>
        <div>
            <p>Gender</p>
            <h6>Female</h6>
        </div>
        <div>
            <p>Birthday</p>
            <h6>Feb 24, 1997</h6>
        </div>
        <div>
            <p>Phone Number</p>
            <h6>(0239) 555 -0108</h6>
        </div>
        <div>
            <p>Registered Date</p>
            <h6>Feb 24, 1997</h6>
        </div>
      </div>
      <div className='listTwo'>
      <div>
            <p>Street Address</p>
            <h6>JL Diponegoro No. 21</h6>
        </div>
        <div>
            <p>City</p>
            <h6>Cilicap</h6>
        </div>
        <div>
            <p>Pin Code</p>
            <h6>655849</h6>
        </div>
        <div>
            <p>Member Status</p>
            <h6>Active Member</h6>
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo
