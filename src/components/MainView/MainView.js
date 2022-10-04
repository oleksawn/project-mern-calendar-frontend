import AddTask from '../AddTask/AddTask';
import TimeView from '../../common/TimeView/TimeView';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Paper } from '@mui/material';

const MainView = ({ dateForView }) => {
  const { tasks, error, status } = useSelector((state) => state.tasks) || [];

  let detailedTasks = [];
  if (dateForView.view === 'day') {
    detailedTasks = tasks.filter((task) => {
      if (task.type === 'time') {
        return task.date && dayjs(task.date).isSame(dateForView.date, 'day');
      }
    });
  }
  // console.log('main tasks ', dateForView.view, dateForView.date, detailedTasks);

  return (
    <Paper
      className="layout__main-container"
      sx={{ backgroundColor: 'block.white', boxSizing: 'border-box' }}
    >
      <div className="main_wrapper">
        {dateForView.view === 'day' && (
          <TimeView date={dateForView.date} tasks={detailedTasks} />
        )}
      </div>

      <AddTask />

    </Paper>
  );
};
export default MainView;
