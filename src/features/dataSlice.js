// dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchJobPostAsync = createAsyncThunk(
  'data/fetchJobData',
  async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      const filteredData = response.data.filter(user => user.Role);
      return filteredData;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchCompanyAsync = createAsyncThunk(
  'data/fetchCompanyData',
  async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      const filteredData = response.data.filter(user => user.CompanyName);
      return filteredData;
    } catch (error) {
      throw error;
    }
  }
);

export const getProfile = createAsyncThunk(
  'data/getProfile',
  async (loggedInUserId, { rejectWithValue }) => {
    try {
      console.log({loggedInUserId})
      const response = await fetch(`http://localhost:3001/userData/${loggedInUserId}`);
      if (!response.ok) {
        const errorMessage = await response.text(); // Get detailed error message from server
        throw new Error(`Failed to fetch user profile: ${errorMessage}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchJSAnAsync = createAsyncThunk(
  'data/fetchJSAn',
  async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchEmpAnAsync = createAsyncThunk(
  'data/fetchEmpAn',
  async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
     
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateDataAsync = createAsyncThunk(
  "data/updateDataAsync",
  async ( user,{rejectWithValue }) => {
    const options ={
        method:"PATCH",
        body:JSON.stringify(user),
        headers:{"content-type":"application/json;charset=UTF-8"},
    }
        const response = await fetch("http://localhost:3001/users/"+user.id,options);
    if (response.ok) {
      const task = response.json();
      return task;
    } else {
      return rejectWithValue({ error: "Something Went Wrong in Issue UPDATE" });
    }
  }
  );


export const addDataAsync = createAsyncThunk(
  'data/addData',
  async (newData) => {
    try {
      const response = await axios.post('http://localhost:3001/users', newData); // Assuming users endpoint on JSON server
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const addUserDataAsync = createAsyncThunk(
  'data/addUserDataAsync',
  async (newData) => {
    try {
      const response = await axios.post('http://localhost:3001/userData', newData); // Assuming users endpoint on JSON server
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteDataAsync = createAsyncThunk(
  'data/deleteData',
  async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      return id;
    } catch (error) {
      throw error;
    }
  }
);

export const removePostFromServer = createAsyncThunk(
  "resume/removeResumeFromServer",
  async (resume, { rejectWithValue }) => {
      try {
          const options = {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
          };
          const response = await fetch(`http://localhost:3001/users/${resume.id}`, options);

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


export const updateProfileToServer = createAsyncThunk(
  "data/updateProfileToServer",
  async ( user,{rejectWithValue }) => {
    const options ={
        method:"PATCH",
        body:JSON.stringify(user),
        headers:{"content-type":"application/json;charset=UTF-8"},
    }
        const response = await fetch("http://localhost:3001/userData/"+user.id,options);
    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      return rejectWithValue({ error: "Something Went Wrong in Issue UPDATE" });
    }
  }
  );

const initialState = {
  users: [],
  selectedData:{},
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSelectedData : (state,action)=>{
      state.selectedData=action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobPostAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobPostAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchJobPostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCompanyAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompanyAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchCompanyAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchJSAnAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJSAnAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchJSAnAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchEmpAnAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmpAnAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchEmpAnAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateDataAsync.fulfilled, (state, action) => {
        /*  const updatedIssue = action.payload; */
         state.users = state.users.map((user) =>
         user.id === action.payload.id ? action.payload : user
         );
         state.error = "";
        /*  state.isLoading = false; */
       })
       .addCase(updateDataAsync.pending, (state) => {
        /*  state.isLoading = true; */
       })
       .addCase(updateDataAsync.rejected, (state, action) => {
         state.error = action.payload.error;
       /*   state.isLoading = false; */
 
 
       })

       .addCase(removePostFromServer.pending, (state) => {})
       .addCase(removePostFromServer.fulfilled, (state, action) => {
         state.users = state.users.filter(
             (user) => user.id !== action.payload.id
           );
         state.error = "";
       })
       .addCase(removePostFromServer.rejected, (state, action) => {
         state.error = action.payload.error; 
       })

       
       .addCase(updateProfileToServer.fulfilled, (state, action) => {
        /*  const updatedIssue = action.payload; */
         state.users = state.users.map((user) =>
           user.id === action.payload.id ? action.payload : user
         );
         state.error = "";
        /*  state.isLoading = false; */
       })
       .addCase(updateProfileToServer.pending, (state) => {
        /*  state.isLoading = true; */
       })
       .addCase(updateProfileToServer.rejected, (state, action) => {
         state.error = action.payload.error;
       /*   state.isLoading = false; */
 
 
       })
      .addCase(deleteDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(addDataAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(addDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addUserDataAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUserDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(addUserDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; // Assuming action.payload contains user profile data
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const {setSelectedData}=dataSlice.actions;
export default dataSlice.reducer;
