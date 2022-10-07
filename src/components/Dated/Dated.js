import { useSelector } from 'react-redux/es/exports';
import dayjs from 'dayjs';
import { Paper, CircularProgress, Typography } from '@mui/material';
import Task from '../../common/Task/Task';

const Dated = ({ dateForView }) => {
  const { tasks, error, status } = useSelector((state) => state.tasks) || []; // get state from store

  const getDayTasks = () => {
    return tasks.filter((task) => {
      if (task.date.inside === false) {
        for (let i = 0; i < task.date.dates.length; i++) {
          if (
            task.date.dates[i].time === false &&
            dayjs(task.date.dates[i].date).isSame(dateForView.date, 'day')
          ) {
            return true;
          }
        }
        return false;
      }

      if (task.type === 'day') {
        return dayjs(task.date).isSame(dateForView.date, 'day');
      }
    });
  };

  // console.log('Dated: view, date, tasks for view ', dateForView.time, dateForView.date, datedTasks);
  return (
    <Paper
      className="layout__dated-container"
      sx={{ backgroundColor: 'block.dark', position: 'relative' }}
    >
      {status === 'loading' && (
        <CircularProgress
          sx={{ position: 'absolute', zIndex: 50, top: '30%', left: '42%' }}
        />
      )}
      {error && <p>{error.message}</p>}

      <Typography variant="icon">ToDos for selected date</Typography>
      {dateForView.view === 'day' &&
        getDayTasks().length > 0 &&
        getDayTasks().map((task) => {
          return (
            <Task
              task={task}
              key={task._id}
              block="dated"
              dateForView={dateForView}
            />
          );
        })}
    </Paper>
  );
};
export default Dated;
