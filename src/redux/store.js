import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slice-tasks';
import taskReducer from './slice-task';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    task: taskReducer,
  },
});
export default store;


