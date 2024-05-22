import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { updateIssueToServer } from '../../features/updateSlice';

function MyVerticallyCenteredModal(props) {
    const [name, setName] = useState('');
    const [id, setId] = useState(0);
    const [ancmnt, setAncmnt] = useState('');
    const { selectedField } = useSelector((state) => state.issues);
    const dispatch = useDispatch();

    useEffect(() => {
        if (Object.keys(selectedField).length !== 0) {
            setName(selectedField.name);
            setAncmnt(selectedField.ancmnt);
            setId(selectedField.id);
        }
    }, [selectedField]);

    const editData = () => {
        props.onHide();
        dispatch(updateIssueToServer({ id, name, ancmnt }));
    };

    return (
        <Modal {...props} centered>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Announcement</Form.Label>
                        <Form.Control type="text" as='textarea' rows={3} placeholder="Password" value={ancmnt} onChange={(e) => setAncmnt(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={editData} style={{ backgroundColor: '#2B358C', color: 'white', border: 'none' }}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default MyVerticallyCenteredModal;
