import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import SingleAppointment from '../../components/singleAppointment/SingleAppointment';

const AppointmentList = () => {
  const [appointments, setApponintments] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:7000/appointments')
      .then(res => setApponintments(res.data))
  }, [])
  return (

    <div>
      <NavBar></NavBar>
      <div className='container text-center my-5'>
        <h1 className='mb-3' style={{ color: "#1B2430" }}>Appointment list</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Cell</th>
              <th>Problem</th>
            </tr>
          </thead>
          <tbody>

            {
              appointments.map(appointment => <SingleAppointment key={appointment._id} appointment={appointment}></SingleAppointment>)
            }

          </tbody>
        </Table>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AppointmentList;