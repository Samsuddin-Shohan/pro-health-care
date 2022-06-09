import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const AppointmentForm = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Card className='w-50 mx-auto my-5'>
        <Card.Body>
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" name="name" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" name='email' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Cell No:</Form.Label>
              <Form.Control type="text" placeholder="Your Cell No" name='cell' />
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

export default AppointmentForm;