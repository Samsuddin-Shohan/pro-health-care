import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='bg-dark text-light  row' id='footer' >
      <div className='col-6 ps-5 d-flex flex-column justify-content-between'>
        <p className='logo'>Pro Health Care</p>
        <p>Copyright @ 2020 Online food </p>
      </div>
      <div className='col-3 lh-1'>
        <p>About Hospital</p>
        <p>Read our blog</p>
        <p>Sign up to deliver</p>
        <p>Add your Information</p>
        <p>Privacy Policy</p>
        <p>Terms of use</p>
      </div>
      <div className='col-3 lh-1'>
        <p>Get help</p>
        <p>Read FAQs</p>
        <p>View all cities</p>
        <p>Hospitals near me</p>
        <p>Services</p>
      </div>
    </div>
  );
};

export default Footer;