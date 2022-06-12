import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './AppointmentForm.css';


const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cell, setCell] = useState('');
  const [problem, setProblem] = useState('');
  const handleSubmitAppointment = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7000/appointments', {
      name,
      email,
      cell,
      problem
    })
      .then(res => console.log(res))
      .then(() => {
        alert('Your appointment is submitted');
        setName('');
        setEmail('');
        setCell('');
        setProblem('');
      })
  }
  return (
    <div>
      <NavBar></NavBar>
      <Card className='w-50 mx-auto my-5'>
        <Card.Body>
          <Form className='my-5' onSubmit={handleSubmitAppointment} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" name="name" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" name='email' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Cell No:</Form.Label>
              <Form.Control onChange={(e) => setCell(e.target.value)} type="text" placeholder="Your Cell No" name='cell' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Describe Your Problem</Form.Label>
              <Form.Control onChange={(e) => setProblem(e.target.value)} type="text" placeholder="Problem" name='problem' />
            </Form.Group>

            <Button className='sub-button' type="submit">
              Submit
            </Button>
          </Form>

        </Card.Body>
      </Card>
      <Footer></Footer>
    </div>
  );
};

export default AppointmentForm;