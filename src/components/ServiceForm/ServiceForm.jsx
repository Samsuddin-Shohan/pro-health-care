import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './ServiceForm.css';

const ServiceForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  console.log(title, description, image);
  const handleCreateService = (e) => {

    axios.post('http://localhost:7000/services', {
      title,
      description,
      image
    })
      .then(res => console.log('res'))
  }
  const handleTitle = (e) => {
    setTitle(e.target.value);

  }
  const handleDescription = (e) => {
    setDescription(e.target.value);
  }
  const handleImage = (e) => {
    setImage(e.target.value);
  }

  return (
    <div>
      <NavBar></NavBar>
      <h1 className='my-3 text-center' style={{ color: "#1B2430" }}>Create a Service</h1>

      <Card className='w-50 mx-auto my-5'>
        <Card.Body>
          <Form className='my-5' onSubmit={handleCreateService}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control required type="text" onChange={handleTitle} placeholder="Enter Title" name="title" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control required type="textarea" onChange={handleDescription} placeholder="Description" name='description' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image Url</Form.Label>
              <Form.Control required type="text" onChange={handleImage} placeholder="Image URL" name='image' />
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

export default ServiceForm;