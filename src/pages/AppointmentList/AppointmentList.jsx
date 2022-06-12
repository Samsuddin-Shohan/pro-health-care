import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

const AppointmentList = () => {
  const [appointments, setApponintments] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:7000/appointments')
      .then(res => console.log(res))
  })
  return (

    <div>
      <NavBar></NavBar>
      <h1>Appointment list</h1>
      <Footer></Footer>
    </div>
  );
};

export default AppointmentList;