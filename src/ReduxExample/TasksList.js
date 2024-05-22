import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import MyVerticallyCenteredModal from './updateTaskModal';
import { useEffect, useState } from 'react';
import { setSelectedTask,getTasksDataFromJSon,removeUserFromJSon } from '../Slices/taskSlice';
function TasksList() {

  const {taskList,error} = useSelector((state)=>state.tasks);
  const dispatch = useDispatch()

    const updateTask=(task)=>{
        console.log("updated");
        setModalShow(true);
        dispatch(setSelectedTask(task))  
    }
    const deleteTask=(task)=>{
        console.log("Deleted");
        dispatch(removeUserFromJSon(task))
    }

    useEffect(()=>{
dispatch(getTasksDataFromJSon())
    },[dispatch])
   
    const [modalShow,setModalShow]=useState(false);
  return (
    <div>
<Table striped bordered hover>
      <thead>
        <tr className='text-center'>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          taskList && taskList.map((task,index) => {
            return (
<tr className='text-center' key={task.id}>
          <td>{index + 1}</td>
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td><Button variant="success" className='mx-3' onClick={()=>updateTask(task)}>Edit</Button><Button variant="danger" onClick={()=>deleteTask(task)}>Delete</Button></td>
        </tr>
            )
          })
        }
        
       
      </tbody>
    </Table>
    <div>{error !==""?<h2>{error}</h2>:null}</div>

<MyVerticallyCenteredModal
show={modalShow}
onHide={() => setModalShow(false)}
/>
    </div>
    
  );
}

export default TasksList;