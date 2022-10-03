import AddTask from '../AddTask/AddTask'
import TimeView from '../../common/TimeView/TimeView';
import { Paper } from '@mui/material';

const MainView = ({ dateForView }) => {

  return (
    <Paper
      className="main_container container"
      sx={{ backgroundColor: 'block.white', boxSizing: 'border-box' }}
    >
      <div className="main_wrapper">
        <TimeView dateForView={dateForView} />
      </div>
      <AddTask />
    </Paper>
  );
};
export default MainView;
