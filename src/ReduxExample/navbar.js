import React from 'react'
import { useSelector } from 'react-redux';
function Navbar() {


    const {taskList} = useSelector((state)=>state.tasks);
    const len = taskList.length;
    console.log(len);
    
  return (
    <>
    <h1 className='text-center my-4 text-primary'>Project Management </h1>
    <p className='text-center lead'>{`Currently ${taskList.length} task(s) pending`}</p>
    </>
    
  )
}

export default Navbar;