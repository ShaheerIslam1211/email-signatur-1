import React from 'react';
import './company.css';
import Navbar from '../Navbar';
function Company() {
  return (
    <>
      <Navbar />
      <div className='company-container'>
        <div className='loader'></div>

        <div>
          <h1>This component work is still in progress</h1>
          <h2 style={{ textAlign: 'center' }}>Please wait......</h2>
        </div>
      </div>
    </>
  );
}

export default Company;
