import React from 'react';
import Tasks from '../../common/Tasks/Tasks';

const Dated = ({ windowSize, dateForView }) => {
  return (
    <div className="dated_container container">
      <Tasks dated={true} date={{ type: 'day', date: dateForView }} />
    </div>
  );
};
export default Dated;
