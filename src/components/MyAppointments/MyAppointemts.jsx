import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import SingleAppointment from '../singleAppointment/SingleAppointment';

const MyAppointemts = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get(`https://powerful-reef-73334.herokuapp.com/appointments/${user.name}`)
      .then(res => setAppointments(res.data))
  }, [])
  return (
    <div>
      <NavBar></NavBar>
      <div className='container text-center my-5'>
        <h1 className='mb-3' style={{ color: "#1B2430" }}>My Appointments</h1>

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

export default MyAppointemts;