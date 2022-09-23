import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Task from '../../common/Task';
import { CircularProgress } from '@mui/material';
import dayjs from 'dayjs';

export default function Tasks({ dated, date }) {
  const { tasks, error, status } = useSelector((state) => state.tasks) || []; // get state from store

  let shownTasks = tasks;
  if (dated && date.type === 'day') {
    shownTasks = tasks.filter((task) => {
      console.log('dated ', date.date, dayjs(task.date));
      return task.date && dayjs(task.date).isSame(date.date, 'day');
    });
  }
  console.log(tasks, shownTasks);
  return (
    <div>
      {status === 'loading' && <CircularProgress />}
      {error && <p>{error.message}</p>}
      {shownTasks.length > 0 &&
        shownTasks.map((task) => {
          return <Task task={task} key={task._id} />;
        })}
    </div>
  );
}
