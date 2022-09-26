import React from 'react';
import AddTask from '../AddTask/AddTask'

const MainView = ({ windowSize, dateView }) => {
  
  return (
    <div className="main_container container">
      <AddTask />
    </div>
  );
};
export default MainView;
