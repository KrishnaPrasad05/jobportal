import React, { useState } from 'react';
import { Table, Modal, Button, Form } from 'react-bootstrap';

const EditableTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [editedValue, setEditedValue] = useState('');
  const [editField, setEditField] = useState('');
  const [data, setData] = useState({
    firstName: 'Lorem Ipsum',
    lastName: 'Lorem Ipsum',
    languages: 'Lorem Ipsum',
    // Add other fields here
  });

  const handleEdit = (field) => {
    setEditField(field);
    setEditedValue(data[field.toLowerCase()]);
    setShowModal(true);
  };

  const handleSave = () => {
    setData(prevData => ({
      ...prevData,
      [editField.toLowerCase()]: editedValue
    }));
    setShowModal(false);
  };

  return (
    <div className="out row" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="out1 col table-responsive">
        <Table striped bordered hover>
          <tbody>
            <tr>
              <th scope="col">First Name</th>
              <td scope="col">{data.firstName}</td>
              <td scope="col">
                <Button variant="outline-primary" onClick={() => handleEdit('FirstName')}>
                  Edit
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="col">Last Name</th>
              <td scope="col">{data.lastName}</td>
              <td scope="col">
                <Button variant="outline-primary" onClick={() => handleEdit('LastName')}>
                  Edit
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="col">Languages Known</th>
              <td scope="col">{data.languages}</td>
              <td scope="col">
                <Button variant="outline-primary" onClick={() => handleEdit('Languages')}>
                  Edit
                </Button>
              </td>
            </tr>
            {/* Add similar rows for other fields */}
          </tbody>
        </Table>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {editField}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" value={editedValue} onChange={(e) => setEditedValue(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditableTable;
