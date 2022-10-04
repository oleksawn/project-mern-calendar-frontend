import { useSelector } from 'react-redux/es/exports';
import dayjs from 'dayjs';
import { Paper, CircularProgress } from '@mui/material';
import Task from '../../common/Task/Task';

const Dated = ({ dateForView }) => {
  const { tasks, error, status } = useSelector((state) => state.tasks) || []; // get state from store

  let datedTasks = [];
  if (dateForView.view === 'day') {
    datedTasks = tasks.filter((task) => {
      if (task.type === 'day') {
        return dayjs(task.date).isSame(dateForView.date, 'day');
      }
    });
  }

  // console.log('Dated: view, date, tasks for view ', dateForView.view, dateForView.date, datedTasks);
  return (
    <Paper
      className="layout__dated-container"
      sx={{ backgroundColor: 'block.dark' }}
    >
      {status === 'loading' && <CircularProgress />}
      {error && <p>{error.message}</p>}

      {datedTasks.length > 0 &&
        datedTasks.map((task) => {
          return <Task task={task} key={task._id} view={dateForView.view} />;
        })}

    </Paper>
  );
};
export default Dated;
