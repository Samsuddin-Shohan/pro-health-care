import { CRow } from '@coreui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:7000/services')
      .then(res => setServices(res.data))
      .catch(e => console.log(e))
  }, [])
  return (

    <div className='container my-5'>
      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }} >
        {
          services.map(service => <Service key={service._id} service={service}></Service>)
        }
      </CRow>
    </div>


  );
};

export default Services;