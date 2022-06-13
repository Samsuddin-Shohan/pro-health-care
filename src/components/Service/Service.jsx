import { CButton, CCard, CCardBody, CCardFooter, CCardImage, CCardText, CCardTitle, CCol } from '@coreui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const history = useHistory();
  return (
    <CCol xs className='d-flex align-items-stretch  justify-content-center'>

      <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={service.image} className="card-image" />
        <CCardBody>
          <CCardTitle>{service.title}</CCardTitle>
          <CCardText>
            {service.description}
          </CCardText>

        </CCardBody>
        <CCardFooter>
          <CButton onClick={() => history.push('/createappointment')} className='sub-button'>Make Appointment</CButton>
        </CCardFooter>
      </CCard>
    </CCol>

  );
};

export default Service;