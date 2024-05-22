import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function TextControlsExample() {
  return (
    <Container className="w-75">
  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Role</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
     
    </Form>
    </Container>
  
  );
}

export default TextControlsExample;