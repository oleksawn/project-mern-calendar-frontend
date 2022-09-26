import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Task from '../Task';
import { CircularProgress } from '@mui/material';
import dayjs from 'dayjs';

export default function Tasks({ dated, date }) {
  const { tasks, error, status } = useSelector((state) => state.tasks) || []; // get state from store
  let shownTasks = tasks;
  if (dated && date.type === 'day') {
    shownTasks = tasks.filter((task) => {
      return task.date && dayjs(task.date).isSame(date.date, 'day');
    });
  }
  return (
    <>
      {status === 'loading' && <CircularProgress />}
      {error && <p>{error.message}</p>}
      {shownTasks.length > 0 &&
        shownTasks.map((task) => {
          return <Task task={task} key={task._id} />;
        })}
    </>
  );
}
