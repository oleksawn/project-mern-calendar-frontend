import React from 'react';
import Tasks from '../../common/Tasks/Tasks';

const Dated = ({ windowSize, dateView}) => {

  return (
    <div className="dated_container container">
      <Tasks dated={true} date={{ type: 'day', date: dateView }} />
    </div>
  );
};
export default Dated;
