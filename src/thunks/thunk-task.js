import { unAuthorizedInstance as API } from '../api/axiosInstances';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTasks = createAsyncThunk('tasks/getTasks', async function () {
  const res = await API.get('/tasks');
  // console.log('get all tasks!')
  return res.data;
});

export const postTask = createAsyncThunk(
  'task/postTask',
  async function (task) {
    const res = await API.post('/tasks', task);
    // console.log('post', res)
    return res.data.insertedId;
  }
);
export const postTaskAndRenew = createAsyncThunk(
  'task/postTaskAndRenew',
  async function (task, thunkAPI) {
    await thunkAPI.dispatch(postTask(task));
    return await thunkAPI.dispatch(getTasks());
  }
);

export const deleteTask = createAsyncThunk(
  'task/deleteTask',
  async function (id) {
    const res = await API.delete('/tasks/'+id);
    // console.log('delete', res);
    return res.data.deletedCount
  }
);
export const deleteTaskAndRenew = createAsyncThunk(
  'task/deleteTaskAndRenew',
  async function (id, thunkAPI) {
    await thunkAPI.dispatch(deleteTask(id));
    return await thunkAPI.dispatch(getTasks());
  }
);


export const changeTaskStatus = createAsyncThunk(
  'task/changeTaskStatus',
  async function (data) {
    const res = await API.put('/tasks/status/' + data.id, data);
    // console.log('status', res);
    return res.data.upsertedId;
  }
);
export const changeTaskStatusAndRenew = createAsyncThunk(
  'task/changeTaskStatusAndRenew',
  async function (data, thunkAPI) {
    await thunkAPI.dispatch(changeTaskStatus(data));
    return await thunkAPI.dispatch(getTasks());
  }
);
