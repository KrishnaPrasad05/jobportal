/* import {configureStore} from "@reduxjs/toolkit"
import taskReducer from './Slices/taskSlice';
export  const store = configureStore({
    reducer:{
tasks :taskReducer
    }
}) */

import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './features/dataSlice';
import updateReducer from './features/updateSlice';
import resumeReducer from './features/resumeSlice';
const store = configureStore({
  reducer: {
    data: dataReducer,
    issues:updateReducer,
    resume:resumeReducer,
    // Add other reducers here if needed
  },
});

export default store;