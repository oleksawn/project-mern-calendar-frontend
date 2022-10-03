import { Paper } from '@mui/material';
import React from 'react';
import Tasks from '../../common/Tasks/Tasks';

const Dated = ({ windowSize, dateForView }) => {
  return (
    <Paper
      className="dated_container container"
      sx={{ backgroundColor: 'block.dark' }}
    >
      <Tasks dated={true} date={{ type: 'day', date: dateForView }} />
    </Paper>
  );
};
export default Dated;
