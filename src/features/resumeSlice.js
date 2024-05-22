import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    
    resumeDetails:[],
    selectedField:{},                     
    isLoading:false,
    error:null
}


const BASE_URL="http://localhost:3001/resume/"

export const getResumeFromServer= createAsyncThunk(
    "resume/getResumeFromServer",
    
    async(_,{rejectWithValue})=>{
        const response=await fetch(BASE_URL)
        if(response.ok){
            const jsonResponse=await response.json()
            console.log(jsonResponse)
            return jsonResponse
        }
        else{
            return rejectWithValue({error:'resume not found'})
        }
    }
)

export const getAnnouncement = createAsyncThunk(
  'update/getAnnouncement',
  async (category, { rejectWithValue }) => {
    try {
      // Make your API request here, passing the category filter
      const response = await fetch(`http://localhost:3001/resume?category=${category}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//post(add)
export const addResumeToServer = createAsyncThunk(
    'resume/addResumeToServer',
    async (newData) => {
      try {
        const response = await axios.post('http://localhost:3001/resume/', newData); // Assuming users endpoint on JSON server
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  );



 //PUT
 
 export const updateResumeToServer = createAsyncThunk(
    "resume/updateResumeToServer",
    async ( resume,{rejectWithValue }) => {
      const options ={
          method:"PATCH",
          body:JSON.stringify(resume),
          headers:{"content-type":"application/json;charset=UTF-8"},
      }
          const response = await fetch("http://localhost:3001/resume/"+resume.id,options);
      if (response.ok) {
        const data = response.json();
        return data;
      } else {
        return rejectWithValue({ error: "Something Went Wrong in Issue UPDATE" });
      }
    }
    );


    export const removeResumeFromServer = createAsyncThunk(
      "resume/removeResumeFromServer",
      async (resume, { rejectWithValue }) => {
          try {
              const options = {
                  method: "DELETE",
                  headers: { "Content-Type": "application/json" },
              };
              const response = await fetch(`http://localhost:3001/resume/${resume.id}`, options);
  
              if (!response.ok) {
                  throw new Error('Failed to delete resume');
              }
  
              const data = await response.json();
              return data;
          } catch (error) {
              return rejectWithValue(error.message);
          }
      }
  )
  
//FACULTY ASUYNCTHRUNK

/* 
export const getresumeFromServerFaculty= createAsyncThunk(
    "resumefaculty/getresumeFromServerFaculty",
    
    async(_,{rejectWithValue})=>{
        const response=await fetch("http://localhost:3001/resumefaculty/")
        if(response.ok){
            const jsonResponse=await response.json()
            console.log(jsonResponse)
            return jsonResponse
        }
        else{
            return rejectWithValue({error:'resume not found'})
        }
    }
);

export const addIssueToServerFaculty = createAsyncThunk(
    "resumefaculty/addIssueToServerFaculty",
    async ( issuefaculty,{rejectWithValue }) => {
      const options ={
          method:"POST",
          body:JSON.stringify(issuefaculty),
          headers:{"content-type":"application/json;charset=UTF-8"},
      }
          const response = await fetch("http://localhost:3001/resumefaculty/",options);
      if (response.ok) {
        const data = response.json();
        return data;
      } else {
        return rejectWithValue({ error: "Something Went Wrong in user addition" });
      }
    }
    );

    export const updateIssueToServerFaculty = createAsyncThunk(
        "resumefaculty/updateIssueToServerFaculty",
        async ( issuefaculty,{rejectWithValue }) => {
          const options ={
              method:"PATCH",
              body:JSON.stringify(issuefaculty),
              headers:{"content-type":"application/json;charset=UTF-8"},
          }
              const response = await fetch("http://localhost:3001/resumefaculty/"+issuefaculty.id,options);
          if (response.ok) {
            const data = response.json();
            return data;
          } else {
            return rejectWithValue({ error: "Something Went Wrong in Issue UPDATE" });
          }
        }
        );


        export const removeIssueFromServerFaculty = createAsyncThunk(
            "resumefaculty/removeIssueFromServerFaculty",
            async ( issuefaculty,{rejectWithValue }) => {
              const options ={
                  method:"DELETE",
                  body:JSON.stringify(issuefaculty),
                  headers:{"content-type":"application/json;charset=UTF-8"},
              }
                  const response = await fetch("http://localhost:3001/resumefaculty/"+issuefaculty.id,options);
              if (response.ok) {
                const data = response.json();
                return data;
              } 
            }
            );
 */




const resumeSlice = createSlice({

    name:'resumeSlice',
    initialState,
    reducers:{
      


          removeUser: (state, action) => {
            state.resumeDetails = state.resumeDetails.filter(
              (resume) => resume.id !== action.payload.id
            );
          },

          updateResume: (state, action) => {
            state.resumeDetails = state.resumeDetails.map((resume) =>
              resume.id === action.payload.id ? action.payload : resume
            );
          },


          setSelectedResume: (state, action) => {
            state.selectedField = action.payload;
          },




            //FACULTY REDUCER


            
/* 
          setSelectedIssueFaculty: (state, action) => {
            state.selectedField = action.payload;
          } */


        

    },




    extraReducers:(builder)=>{
        builder
        // GET
        .addCase(getResumeFromServer.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getResumeFromServer.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=''
            state.resumeDetails = action.payload
        })
        .addCase(getResumeFromServer.rejected,(state,action)=>{
            state.error=action.payload.error
            state.isLoading=false
            state.resumeDetails=[]
        })

        
        .addCase(addResumeToServer.pending, (state) => {})
      .addCase(addResumeToServer.fulfilled, (state, action) => {
        state.resumeDetails.push(action.payload);
        state.error = "";
      })
      .addCase(addResumeToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        
      })


       .addCase(updateResumeToServer.fulfilled, (state, action) => {
       /*  const updatedIssue = action.payload; */
        state.resumeDetails = state.resumeDetails.map((resume) =>
          resume.id === action.payload.id ? action.payload : resume
        );
        state.error = "";
       /*  state.isLoading = false; */
      })
      .addCase(updateResumeToServer.pending, (state) => {
       /*  state.isLoading = true; */
      })
      .addCase(updateResumeToServer.rejected, (state, action) => {
        state.error = action.payload.error;
      /*   state.isLoading = false; */


      })

      .addCase(removeResumeFromServer.pending, (state) => {})
      .addCase(removeResumeFromServer.fulfilled, (state, action) => {
        state.resumeDetails = state.resumeDetails.filter(
            (resume) => resume.id !== action.payload.id
          );
        state.error = "";
      })
      .addCase(removeResumeFromServer.rejected, (state, action) => {
        state.error = action.payload.error; 
      })

      .addCase(getAnnouncement.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAnnouncement.fulfilled, (state, action) => {
        state.loading = false;
        state.resumeDetails = action.payload;
      })
      .addCase(getAnnouncement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

   


      //FACULTY EXTRATHRUNK

     /*  .addCase(getresumeFromServerFaculty.pending,(state)=>{
        state.isLoading=true
    })
    .addCase(getresumeFromServerFaculty.fulfilled,(state,action)=>{
        state.isLoading=false
        state.error=''
        state.resumeDetails = action.payload
    })
    .addCase(getresumeFromServerFaculty.rejected,(state,action)=>{
        state.error=action.payload.error
        state.isLoading=false
        state.resumeDetails=[]
    })


      
    .addCase(addIssueToServerFaculty.pending, (state) => {})
    .addCase(addIssueToServerFaculty.fulfilled, (state, action) => {
      state.resumeDetails.push(action.payload);
      state.error = "";
    })
    .addCase(addIssueToServerFaculty.rejected, (state, action) => {
      state.error = action.payload.error;
      
    })


    .addCase(updateIssueToServerFaculty.fulfilled, (state, action) => {
        
         state.resumeDetails = state.resumeDetails.map((issuefaculty) =>
         issuefaculty.id === action.payload.id ? action.payload : issuefaculty
         );
         state.error = "";
       
       })
       .addCase(updateIssueToServerFaculty.pending, (state) => {
     
       })
       .addCase(updateIssueToServerFaculty.rejected, (state, action) => {
         state.error = action.payload.error;
      
 
 
       })

       .addCase(removeIssueFromServerFaculty.pending, (state) => {})
       .addCase(removeIssueFromServerFaculty.fulfilled, (state, action) => {
         state.resumeDetails = state.resumeDetails.filter(
             (issuefaculty) => issuefaculty.id !== action.payload.id
           );
         state.error = "";
       })
       .addCase(removeIssueFromServerFaculty.rejected, (state, action) => {
         state.error = action.payload.error; 
       }) */



    
    },
}



);




 export const {addResume,updateResume,removeUser,setSelectedResume,/* setSelectedIssueFaculty */} = resumeSlice.actions ;
 export const { error } = resumeSlice;
export default resumeSlice.reducer;