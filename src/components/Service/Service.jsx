import { CButton, CCard, CCardBody, CCardFooter, CCardImage, CCardText, CCardTitle, CCol } from '@coreui/react';
import React from 'react';
import './Service.css';

const Service = ({ service }) => {
  return (
    <CCol xs>

      <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={service.image} />
        <CCardBody>
          <CCardTitle>{service.title}</CCardTitle>
          <CCardText>
            {service.description}
          </CCardText>

        </CCardBody>
        <CCardFooter>
          <CButton className='sub-button'>Make Appointment</CButton>
        </CCardFooter>
      </CCard>
    </CCol>

  );
};

export default Service;