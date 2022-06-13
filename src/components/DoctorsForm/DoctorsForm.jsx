import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './DoctorsForm.css';

const DoctorsForm = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDesctiption] = useState('');
  const [image, setImage] = useState('');
  const handleSubmitDoctor = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7000/doctors', {
      name,
      title,
      image,
      description
    })
      .then(res => console.log(res))
      .then(() => {
        alert('Your appointment is submitted');
        e.target.reset();
      })
  }
  return (
    <div>
      <NavBar></NavBar>
      <h1 className='my-3 text-center' style={{ color: "#1B2430" }}>Please Fill this information</h1>

      <Card className='w-50 mx-auto my-5'>
        <Card.Body>
          <Form className='my-5' onSubmit={handleSubmitDoctor} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control required onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" name="name" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control required onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Your Email" name='email' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control required onChange={(e) => setDesctiption(e.target.value)} type="text" placeholder="Your Cell No" name='cell' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image URL</Form.Label>
              <Form.Control required onChange={(e) => setImage(e.target.value)} type="text" placeholder="Problem" name='problem' />
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

export default DoctorsForm;