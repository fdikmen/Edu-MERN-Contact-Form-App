import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Helmet } from 'react-helmet';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
      </Helmet>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name ..." />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email ..." />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Subject</Form.Label>
          <Form.Control placeholder="Subject ..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Please typing your messages ..." />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Contact;
