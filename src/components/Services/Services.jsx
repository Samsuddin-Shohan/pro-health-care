import { CRow } from '@coreui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get('https://powerful-reef-73334.herokuapp.com/services')
      .then(res => setServices(res.data))
      .catch(e => console.log(e))
  }, [])
  return (

    <div className='container my-5'>
      <h1 className='text-center fw-bold mb-3'>Services</h1>
      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }} >
        {
          services.map(service => <Service key={service._id} service={service}></Service>)
        }
      </CRow>
    </div>


  );
};

export default Services;