import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react';
import { addTaskToListUp, addUserToJSon } from '../Slices/taskSlice';
import { useDispatch } from 'react-redux';
function AddTask() {

    const dispatch=useDispatch();
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')


    const addTest = (e) => {
        e.preventDefault();
        // console.log({title,description})
        dispatch(addUserToJSon({title,description}))
        setTitle('');
        setDescription('')
            }
  return (
    <section className='my-5'>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Task" value={title} onChange={(e) =>setTitle(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Progess" value={description} onChange={(e) =>setDescription(e.target.value)}/>
      </Form.Group>
     <div className='text-end'>
     <Button variant="primary" type="submit" onClick={(e) =>addTest(e)}>
        Add Task
      </Button>
     </div>
      
    </Form>
    </section>
    
  );
}

export default AddTask;