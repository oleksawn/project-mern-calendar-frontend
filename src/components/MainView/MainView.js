import AddTask from '../AddTask/AddTask';
import TimeView from '../../common/TimeView/TimeView';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Paper } from '@mui/material';
import { useState } from 'react';

const MainView = ({ dateForView }) => {
  const { tasks, error, status } = useSelector((state) => state.tasks) || [];

  const getTimedTasksForDate = () => {
    return tasks.filter((task) => {
      if (task.date.inside === false) {
        for (let i = 0; i < task.date.dates.length; i++) {
          if (
            task.date.dates[i].time &&
            dayjs(task.date.dates[i].date).isSame(dateForView.date, 'day')
          ) {
            return true;
          }
        }
      }
      return false;
    });
    // console.log('main: timed tasks for date ', timedTasks);
  };

  return (
    <Paper
      className="layout__main-container"
      sx={{ backgroundColor: 'block.white', boxSizing: 'border-box' }}
    >
      <div className="main_wrapper">
        {dateForView.view === 'day' && (
          <TimeView date={dateForView.date} tasks={getTimedTasksForDate()} />
        )}
      </div>

      <AddTask />
    </Paper>
  );
};
export default MainView;
