import React from 'react';
import './LoadingSpinner.css';
const Loadingspinner = () => {
  return (
    <div className="spinner-container d-flex justify-content-center align-items-center">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

      </div>
    </div>
  );
};

export default Loadingspinner;