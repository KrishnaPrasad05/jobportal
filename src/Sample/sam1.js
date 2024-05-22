import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ExampleModal from "./sam3";
function BasicExample() {
  return (
    <Container>
 <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Admin</td>
          <td>
          <ExampleModal/>
      <Button variant="danger">Delete</Button>{" "}
          </td>
         
        </tr>
        
      </tbody>
    </Table>
    </Container>
   
  );
}

export default BasicExample;