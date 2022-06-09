import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const ServiceForm = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Card className='w-50 mx-auto my-5'>
        <Card.Body>
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" name="title" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="textarea" placeholder="Description" name='description' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image Url</Form.Label>
              <Form.Control type="text" placeholder="Image URL" name='image' />
            </Form.Group>

            <Button variant="primary" type="submit">
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