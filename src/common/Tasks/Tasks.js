import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Task from '../Task/Task';
import { CircularProgress } from '@mui/material';
import dayjs from 'dayjs';

export default function Tasks() {
  const { tasks, error, status } = useSelector((state) => state.tasks) || []; // get state from store
  return (
    <>
      {status === 'loading' && <CircularProgress />}
      {error && <p>{error.message}</p>}
      {tasks.length > 0 &&
        tasks.map((task) => {
          return <Task task={task} key={task._id} view='spheres'/>;
        })}
    </>
  );
}
