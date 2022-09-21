import { createSlice } from '@reduxjs/toolkit';
import { postTask, deleteTask, changeTaskStatus } from '../thunks/thunk-task';

const task = createSlice({
  name: 'task',
  initialState: {
    errorTask: {},
  },
  reducers: {
    deleteErrorTask(state, action) {
      state.errorTask = {};
    },
  },
  extraReducers: {
    [postTask.pending]: (state, action) => {
      // console.log('task pending!!!', action);
      state.error = null;
    },
    [postTask.fulfilled]: (state, action) => {
      // console.log('task  fulfilled!!!', action);
      // state.successTasksArr.push(action.payload);
      // state.error = null;
    },
    [postTask.rejected]: (state, action) => {
      //console.log('task rejected!!!', action);
      state.errorTask = {
        operation: 'POST',
        error: action.error,
        task: action.meta.arg,
      };
    },
    [deleteTask.pending]: (state, action) => {
      // console.log('task del pending!!!', action);
      state.error = null;
    },
    [deleteTask.fulfilled]: (state, action) => {
      // console.log('task del fulfilled!!!', action);
      // state.successTasksArr.push(action.payload);
      // state.error = null;
    },
    [deleteTask.rejected]: (state, action) => {
      // console.log('task del rejected!!!', action);
      state.errorTask = {
        operation: 'DELETE',
        error: action.error,
        taskId: action.meta.arg,
      };
    },
    [changeTaskStatus.pending]: (state, action) => {
      // console.log('task status pending!!!', action);
      state.error = null;
    },
    [changeTaskStatus.fulfilled]: (state, action) => {
      // console.log('task status fulfilled!!!', action);
      // state.successTasksArr.push(action.payload);
      // state.error = null;
    },
    [changeTaskStatus.rejected]: (state, action) => {
      //console.log('task status rejected!!!', action);
      state.errorTask = {
        operation: 'DELETE',
        error: action.error,
        taskId: action.meta.arg,
      };
    },
  },
});

export default task.reducer;
export const { deleteErrorTask } = task.actions;