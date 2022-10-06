import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteTaskAndRenew,
  changeTaskStatusAndRenew,
} from '../../thunks/thunk-task';
import Dated from './TaskViews/Dated';
import Spheres from './TaskViews/Spheres';

export default function Task({ task, block, dateForView }) {
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const handleStatusChange = () => {
    dispatch(changeTaskStatusAndRenew({ id: task._id, status: !status }));
  };
  const handleDeleteButton = () => {
    dispatch(deleteTaskAndRenew(task._id));
  };

  useEffect(() => {
    setStatus(task.status);
  }, [task.status]);

  return (
    <>
      {block === 'dated' && (
        <Dated
          task={task}
          status={status}
          handleStatusChange={handleStatusChange}
          handleDeleteButton={handleDeleteButton}
          dateForView={dateForView}
        />
      )}
      {block === 'spheres' && (
        <Spheres
          task={task}
          status={status}
          handleStatusChange={handleStatusChange}
          handleDeleteButton={handleDeleteButton}
        />
      )}
    </>
  );
}
