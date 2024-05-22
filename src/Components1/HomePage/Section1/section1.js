import React from 'react';
import Dashboard from './dashboard';
import Jobs4U from './job4u';
import TopFtd from './topFtd';
function Section1(){
    return(
        <div>
<Dashboard/>
<h1 className='text-center mt-5' style={{color:'#2B358C'}}>Jobs For You</h1>
        <Jobs4U/>
        <h1 className='text-center mt-5' style={{color:'#2B358C'}}>Top Featured Companies</h1>
        <TopFtd/>
        </div>
        
    );
}
export default Section1;