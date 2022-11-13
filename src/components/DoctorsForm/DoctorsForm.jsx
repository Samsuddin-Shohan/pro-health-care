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
  const [time, setTime] = useState('');
  const handleSubmitDoctor = (e) => {
    e.preventDefault();
    axios.post('https://powerful-reef-73334.herokuapp.com/doctors', {
      name,
      title,
      image,
      description,

    })
      .then(res => console.log(res))
      .then(() => {
        alert('New Doctor Created');
        e.target.reset();
      })
  }
  return (
    <div>
      <NavBar></NavBar>
      <h1 className='my-3 text-center' style={{ color: "#1B2430" }}>Create Doctors</h1>

      <Card className='w-50 mx-auto my-5'>
        <Card.Body>
          <Form className='my-5' onSubmit={handleSubmitDoctor} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control required onChange={(e) => setName(e.target.value)} type="text" placeholder=" Name" name="name" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control required onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" name='email' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control required onChange={(e) => setDesctiption(e.target.value)} type="text" placeholder="Description" name='cell' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image URL</Form.Label>
              <Form.Control required onChange={(e) => setImage(e.target.value)} type="text" placeholder="Image URL" name='problem' />
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