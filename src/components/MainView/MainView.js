import AddTask from '../AddTask/AddTask';
import TimeGrid from '../../common/TimeGrid/TimeGrid';
import { useSelector } from 'react-redux';
import { getDayTasks } from './../taskFilters';
import { Paper, Typography } from '@mui/material';
import { useRef } from 'react';

const MainView = ({ dateForView }) => {
  const { tasks, error, status } = useSelector((state) => state.tasks) || [];

  return (
    <Paper
      className="layout__main-container"
      sx={{ backgroundColor: 'block.white', boxSizing: 'border-box' }}
    >
      <div className="main_wrapper">
        <Typography variant="icon">
          ToDos with time for selected date
        </Typography>
        {dateForView.view === 'day' && (
          <TimeGrid
            date={dateForView.date}
            tasks={getDayTasks(tasks, true, dateForView)}
          />
        )}
      </div>

      <AddTask />
    </Paper>
  );
};
export default MainView;
