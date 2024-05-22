import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    taskList:[],
    selectedTask:{},
    error:""
}



export const getTasksDataFromJSon = createAsyncThunk("tasks/getTasksDataFromJSon",async (_,{rejectWithValue})=>{
    
    const response= await fetch("http://localhost:5000/tasks");
    if(response.ok){
        const data =response.json();
        return data; 
    }
    else{
return rejectWithValue({error:"No User found"})
    }
});

export const addUserToJSon = createAsyncThunk("tasks/addUserToJSon",async (task,{rejectWithValue})=>{
    const options={method:"POST",body:JSON.stringify(task),headers:{"content-type":"application/json;charset=UTF-9"}}
    const response= await fetch("http://localhost:5000/tasks",options);
    if(response.ok){
        const data =response.json();
        return data; 
    }
    else{
return rejectWithValue({error:"Something went wrong add"})
    }
});

export const updateUserToJSon = createAsyncThunk("tasks/updateUserToJSon",async (task,{rejectWithValue})=>{
    const options={method:"PATCH",body:JSON.stringify(task),headers:{"content-type":"application/json;charset=UTF-9"}}
    const response= await fetch("http://localhost:5000/tasks "+ task.id,options);
    if(response.ok){
        const data =response.json();
        return data; 
    }
    else{
return rejectWithValue({error:"Something went wrong up"})
    }
});
export const removeUserFromJSon = createAsyncThunk("tasks/removeUserFromJSon",async (task,{rejectWithValue})=>{
    const options={method:"DELETE"}
    const response= await fetch("http://localhost:5000/tasks/"+ task.id,options);
    if(response.ok){
        const data =response.json();
        return data; 
    }
    else{
return rejectWithValue({error:"Something went wrong del"})
    }
});

   

export const taskSLice=createSlice({
name:'taskSlice' ,
initialState,
reducers:{
addTaskToListUp:(state,action)=>{
     const id=Math.random()*100
     let task = {...action.payload,id}     
     state.taskList.push(task);
     
},
removeFromList:(state,action)=>{
    state.taskList=state.taskList.filter((task)=>task.id !== action.payload.id)
},
updateTaskInList:(state,action)=>{
    state.taskList=state.taskList.map((task)=>task.id === action.payload.id ? action.payload : task)
},
setSelectedTask:(state,action)=>{
    state.selectedTask=action.payload
}
} ,
extraReducers :(builder)=>{
    builder.addCase(getTasksDataFromJSon.pending,(state)=>{})
    .addCase(getTasksDataFromJSon.fulfilled,(state,action)=>{
        state.taskList=action.payload;
        state.error="";
})
.addCase(getTasksDataFromJSon.rejected,(state,action)=>{
    state.error=action.payload.error;
    state.taskList=[];
})
.addCase(addUserToJSon.pending,(state)=>{})
    .addCase(addUserToJSon.fulfilled,(state,action)=>{
        state.taskList.push(action.payload);
        state.error="";
})
.addCase(addUserToJSon.rejected,(state,action)=>{
    state.error=action.payload.error;
    
})

.addCase(updateUserToJSon.pending,(state)=>{})
    .addCase(updateUserToJSon.fulfilled,(state,action)=>{
        state.taskList=state.taskList.map((task)=>task.id === action.payload.id ? action.payload : task)
        state.error="";
})
.addCase(updateUserToJSon.rejected,(state,action)=>{
    state.error=action.payload.error;
    
})

.addCase(removeUserFromJSon.pending,(state)=>{})
    .addCase(removeUserFromJSon.fulfilled,(state,action)=>{
        state.taskList=state.taskList.filter((task)=>task.id !== action.payload.id)
        state.error="";
})
.addCase(removeUserFromJSon.rejected,(state,action)=>{
    state.error=action.payload.error;
    
})
    
}  
})

export const {addTaskToListUp,removeFromList,updateTaskInList,setSelectedTask} =taskSLice.actions;

export default taskSLice.reducer;