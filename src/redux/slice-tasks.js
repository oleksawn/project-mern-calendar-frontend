import { createSlice } from '@reduxjs/toolkit';
import { getTasks } from '../thunks/thunk-task';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [getTasks.pending]: (state, action) => {
      // console.log('tasks pending!!!');
      // console.log(state.tasksArr);
      state.status = 'loading';
      state.error = null;
    },
    [getTasks.fulfilled]: (state, action) => {
      // console.log('tasks fulfilled!!!');
      state.status = 'resolved';
      state.tasks = action.payload;
      state.error = null;
    },
    [getTasks.rejected]: (state, action) => {
      // console.log('tasks rejected!!!');
      state.status = 'rejected';
      state.error = action.error;
    },
  },
});

export default tasks.reducer;
