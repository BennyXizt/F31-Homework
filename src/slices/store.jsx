import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todoSlice';
import { userSlice } from './userSlice';


const store = configureStore({
  reducer: {
    todo: todoSlice.reducer, 
    user: userSlice.reducer
  },
});

export default store;