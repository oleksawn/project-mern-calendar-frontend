import * as React from 'react';
import { Popover, Typography, Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux/es/exports';
import {deleteErrorTask} from '../redux/slice-task';

export default function ErrorModal({ errorTask, anchor }) {
  const { error, operation, task , taskId } = errorTask;
  const [anchorEl] = React.useState(anchor);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(deleteErrorTask());
  };

  return (
    <div>
      <Popover
        // id={id}
        open={true}
        anchorEl={anchorEl}
        // onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Checkbox checked={false} onChange={handleChange} label="close" />
        <Typography sx={{ p: 2 }}>
          {`Error ${error.message} was occured 
          when ${operation} task ${task ? task.title : taskId}`}
        </Typography>
      </Popover>
    </div>
  );
}
