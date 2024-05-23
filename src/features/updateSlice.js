import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState={
    
    issuesList:[],
    selectedField:{},                     
    isLoading:false,
    error:null
}


const BASE_URL="https://wry-seemly-berry.glitch.me/issues/"

export const getIssuesFromServer= createAsyncThunk(
    "issues/getIssuesFromServer",
    
    async(_,{rejectWithValue})=>{
        const response=await fetch(BASE_URL)
        if(response.ok){
            const jsonResponse=await response.json()
            console.log(jsonResponse)
            return jsonResponse
        }
        else{
            return rejectWithValue({error:'issues not found'})
        }
    }
)

export const getAnnouncement = createAsyncThunk(
  'update/getAnnouncement',
  async (category, { rejectWithValue }) => {
    try {
      // Make your API request here, passing the category filter
      const response = await fetch(`https://wry-seemly-berry.glitch.me/issues?category=${category}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getComment = createAsyncThunk(
  'update/getComment',
  async (category, { rejectWithValue }) => {
    try {
      // Make your API request here, passing the category filter
      const response = await fetch(`https://wry-seemly-berry.glitch.me/issues?CommentCategory=${category}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//post(add)
export const addIssueToServer = createAsyncThunk(
    "issues/addIssueToServer",
    async ( issue,{rejectWithValue }) => {
      const options ={
          method:"POST",
          body:JSON.stringify(issue),
          headers:{"content-type":"application/json;charset=UTF-8"},
      }
          const response = await fetch("https://wry-seemly-berry.glitch.me/issues/",options);
      if (response.ok) {
        const data = response.json();
        return data;
      } else {
        return rejectWithValue({ error: "Something Went Wrong in user addition" });
      }
    }
    );
export const addResponseToServer = createAsyncThunk(
    "issues/addResponseToServer",
    async ( issue,{rejectWithValue }) => {
      const options ={
          method:"POST",
          body:JSON.stringify(issue),
          headers:{"content-type":"application/json;charset=UTF-8"},
      }
          const response = await fetch("https://wry-seemly-berry.glitch.me/response/",options);
      if (response.ok) {
        const data = response.json();
        return data;
      } else {
        return rejectWithValue({ error: "Something Went Wrong in user addition" });
      }
    }
    );



 //PUT
 
 export const updateIssueToServer = createAsyncThunk(
    "issues/updateIssueToServer",
    async ( issue,{rejectWithValue }) => {
      const options ={
          method:"PATCH",
          body:JSON.stringify(issue),
          headers:{"content-type":"application/json;charset=UTF-8"},
      }
          const response = await fetch("https://wry-seemly-berry.glitch.me/issues/"+issue.id,options);
      if (response.ok) {
        const data = response.json();
        return data;
      } else {
        return rejectWithValue({ error: "Something Went Wrong in Issue UPDATE" });
      }
    }
    );


    export const removeIssueFromServer = createAsyncThunk(
        "issues/removeIssueFromServer",
        async ( issue,{rejectWithValue }) => {
          const options ={
              method:"DELETE",
              body:JSON.stringify(issue),
              headers:{"content-type":"application/json;charset=UTF-8"},
          }
              const response = await fetch("https://wry-seemly-berry.glitch.me/issues/"+issue.id,options);
          if (response.ok) {
            const data = response.json();
            return data;
          } 
        }
        );
  
//FACULTY ASUYNCTHRUNK

/* 
export const getIssuesFromServerFaculty= createAsyncThunk(
    "issuesfaculty/getIssuesFromServerFaculty",
    
    async(_,{rejectWithValue})=>{
        const response=await fetch("https://wry-seemly-berry.glitch.me/issuesfaculty/")
        if(response.ok){
            const jsonResponse=await response.json()
            console.log(jsonResponse)
            return jsonResponse
        }
        else{
            return rejectWithValue({error:'issues not found'})
        }
    }
);

export const addIssueToServerFaculty = createAsyncThunk(
    "issuesfaculty/addIssueToServerFaculty",
    async ( issuefaculty,{rejectWithValue }) => {
      const options ={
          method:"POST",
          body:JSON.stringify(issuefaculty),
          headers:{"content-type":"application/json;charset=UTF-8"},
      }
          const response = await fetch("https://wry-seemly-berry.glitch.me/issuesfaculty/",options);
      if (response.ok) {
        const data = response.json();
        return data;
      } else {
        return rejectWithValue({ error: "Something Went Wrong in user addition" });
      }
    }
    );

    export const updateIssueToServerFaculty = createAsyncThunk(
        "issuesfaculty/updateIssueToServerFaculty",
        async ( issuefaculty,{rejectWithValue }) => {
          const options ={
              method:"PATCH",
              body:JSON.stringify(issuefaculty),
              headers:{"content-type":"application/json;charset=UTF-8"},
          }
              const response = await fetch("https://wry-seemly-berry.glitch.me/issuesfaculty/"+issuefaculty.id,options);
          if (response.ok) {
            const data = response.json();
            return data;
          } else {
            return rejectWithValue({ error: "Something Went Wrong in Issue UPDATE" });
          }
        }
        );


        export const removeIssueFromServerFaculty = createAsyncThunk(
            "issuesfaculty/removeIssueFromServerFaculty",
            async ( issuefaculty,{rejectWithValue }) => {
              const options ={
                  method:"DELETE",
                  body:JSON.stringify(issuefaculty),
                  headers:{"content-type":"application/json;charset=UTF-8"},
              }
                  const response = await fetch("https://wry-seemly-berry.glitch.me/issuesfaculty/"+issuefaculty.id,options);
              if (response.ok) {
                const data = response.json();
                return data;
              } 
            }
            );
 */




const issueSlice = createSlice({

    name:'issueSlice',
    initialState,
    reducers:{



        addIssue: (state, action) => {       
            const id = Math.random() * 100;
            let newIssue = { ...action.payload, id };
            state.issuesList.push(newIssue);
          },


          removeUser: (state, action) => {
            state.issuesList = state.issuesList.filter(
              (issue) => issue.id !== action.payload.id
            );
          },

          updateIssue: (state, action) => {
            state.issuesList = state.issuesList.map((issue) =>
              issue.id === action.payload.id ? action.payload : issue
            );
          },


          setSelectedIssue: (state, action) => {
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
        .addCase(getIssuesFromServer.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getIssuesFromServer.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=''
            state.issuesList = action.payload
        })
        .addCase(getIssuesFromServer.rejected,(state,action)=>{
            state.error=action.payload.error
            state.isLoading=false
            state.issuesList=[]
        })

        
        .addCase(addIssueToServer.pending, (state) => {})
      .addCase(addIssueToServer.fulfilled, (state, action) => {
        state.issuesList.push(action.payload);
        state.error = "";
      })
      .addCase(addIssueToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        
      })

      .addCase(addResponseToServer.pending, (state) => {})
      .addCase(addResponseToServer.fulfilled, (state, action) => {
        state.issuesList.push(action.payload);
        state.error = "";
      })
      .addCase(addResponseToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        
      })

       .addCase(updateIssueToServer.fulfilled, (state, action) => {
       /*  const updatedIssue = action.payload; */
        state.issuesList = state.issuesList.map((issue) =>
          issue.id === action.payload.id ? action.payload : issue
        );
        state.error = "";
       /*  state.isLoading = false; */
      })
      .addCase(updateIssueToServer.pending, (state) => {
       /*  state.isLoading = true; */
      })
      .addCase(updateIssueToServer.rejected, (state, action) => {
        state.error = action.payload.error;
      /*   state.isLoading = false; */


      })

      .addCase(removeIssueFromServer.pending, (state) => {})
      .addCase(removeIssueFromServer.fulfilled, (state, action) => {
        state.issuesList = state.issuesList.filter(
            (issue) => issue.id !== action.payload.id
          );
        state.error = "";
      })
      .addCase(removeIssueFromServer.rejected, (state, action) => {
        state.error = action.payload.error; 
      })

      .addCase(getAnnouncement.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAnnouncement.fulfilled, (state, action) => {
        state.loading = false;
        state.issuesList = action.payload;
      })
      .addCase(getAnnouncement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getComment.fulfilled, (state, action) => {
        state.loading = false;
        state.issuesList = action.payload;
      })
      .addCase(getComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

   


      //FACULTY EXTRATHRUNK

     /*  .addCase(getIssuesFromServerFaculty.pending,(state)=>{
        state.isLoading=true
    })
    .addCase(getIssuesFromServerFaculty.fulfilled,(state,action)=>{
        state.isLoading=false
        state.error=''
        state.issuesList = action.payload
    })
    .addCase(getIssuesFromServerFaculty.rejected,(state,action)=>{
        state.error=action.payload.error
        state.isLoading=false
        state.issuesList=[]
    })


      
    .addCase(addIssueToServerFaculty.pending, (state) => {})
    .addCase(addIssueToServerFaculty.fulfilled, (state, action) => {
      state.issuesList.push(action.payload);
      state.error = "";
    })
    .addCase(addIssueToServerFaculty.rejected, (state, action) => {
      state.error = action.payload.error;
      
    })


    .addCase(updateIssueToServerFaculty.fulfilled, (state, action) => {
        
         state.issuesList = state.issuesList.map((issuefaculty) =>
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
         state.issuesList = state.issuesList.filter(
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




 export const {addIssue,updateIssue,removeUser,setSelectedIssue,/* setSelectedIssueFaculty */} = issueSlice.actions ;
 export const { error } = issueSlice;
export default issueSlice.reducer;