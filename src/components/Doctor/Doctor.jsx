import { CButton, CCard, CCardBody, CCardFooter, CCardImage, CCardText, CCardTitle, CCol } from '@coreui/react';
import React from 'react';
import './Doctor.css';

const Doctor = ({ doctor }) => {
  return (
    <CCol xs className='d-flex align-items-stretch  justify-content-center'>

      <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={doctor.image} className="card-image" />
        <CCardBody>
          <CCardTitle>{doctor.name}</CCardTitle>
          <CCardText>
            {doctor.description}
          </CCardText>

        </CCardBody>
        <CCardFooter>
          <CButton className='submits-button'>{doctor.title}</CButton>
          {/* <CButton>{doctor.time}</CButton> */}
        </CCardFooter>
      </CCard>
    </CCol>

  );
};

export default Doctor;