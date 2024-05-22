import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeIssueFromServer } from '../../features/updateSlice'

function DeleteTask(props) {
    const dispatch = useDispatch();

    const deleteData = () => {
      console.log('submitted deleted')
        dispatch(removeIssueFromServer(props.issue));
        props.onHide();
    };

    return (                    
        <Modal 
        {...props} centered>
            <Modal.Header closeButton>
                <Modal.Title>Delete Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure you want to delete this Issue?</p>
          <p style={{color:'red'}}>This will remove the posted announcement.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={props.onHide} style={{ backgroundColor: '#2B358C', color: 'white', border: 'none' }}>
                    Cancel
                </Button>
                <Button variant="dark" onClick={deleteData} style={{ backgroundColor: 'maroon', color: 'white', border: 'none' }}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteTask;