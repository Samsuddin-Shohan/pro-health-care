import { CRow } from '@coreui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import Loadingspinner from '../LoadingSpinner/Loadingspinner';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://powerful-reef-73334.herokuapp.com/doctors')
      .then(res => {
        setDoctors(res.data);
        setIsLoading(false);
      })
      .catch(e => console.log(e))
  }, [])
  return (
    <div className='container my-5'>
      {isLoading ? <Loadingspinner></Loadingspinner> : <div> <h1 className='mb-3 text-center fw-bold'>Doctors</h1>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }} >
          {
            doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
          }
        </CRow></div>}

    </div>

  );
};

export default Doctors;