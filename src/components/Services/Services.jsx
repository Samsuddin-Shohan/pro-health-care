import { CRow } from '@coreui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loadingspinner from '../LoadingSpinner/Loadingspinner';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://powerful-reef-73334.herokuapp.com/services')
      .then(res => {

        setServices(res.data);
        setIsLoading(false);

      })
      .catch(e => console.log(e))
  }, [])
  return (

    <div className='container my-5'>
      {isLoading ? <Loadingspinner></Loadingspinner> : <div> <h1 className='text-center fw-bold mb-3'>Services</h1>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }} >
          {
            services.map(service => <Service key={service._id} service={service}></Service>)
          }
        </CRow></div>}

    </div>


  );
};

export default Services;