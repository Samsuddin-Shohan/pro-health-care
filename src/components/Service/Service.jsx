import { CCard, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import React from 'react';

const Service = () => {
  return (

    <CCard style={{ width: '18rem' }}>
      <CCardImage orientation="top" src="/images/react.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CCardText>
        <CButton href="#">Make Appointment</CButton>
      </CCardBody>
    </CCard>

  );
};

export default Service;