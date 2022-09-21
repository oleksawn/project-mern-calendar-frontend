import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTaskAndRenew } from '../../thunks/thunk-task';
import { FormGroup, Input, Button } from '@mui/material';
import ErrorModal from '../../common/ErrorModal';

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const { errorTask } = useSelector((state) => state.task) || [];
  const taskModalRef = useRef();
  const dispatch = useDispatch();

  // console.log('add new task: ',errorTask)

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleTaskSubmit = () => {
    dispatch(postTaskAndRenew({ title: taskTitle, status: false }));
    setTaskTitle('');
  };

  return (
    <div ref={taskModalRef}>
      {Object.keys(errorTask).length === 0 ? (
        <FormGroup>
          <Input
            sx={{ width: 300, border: '2px solid blue' }}
            placeholder="Add new task here..."
            value={taskTitle}
            onChange={(e) => handleTaskTitleChange(e)}
            multiline
          />
          <Button
            sx={{ width: 300 }}
            variant="outlined"
            onClick={handleTaskSubmit}
          >
            Save
          </Button>
        </FormGroup>
      ) : (
        <>
          <ErrorModal errorTask={errorTask} anchor={taskModalRef.current} />
        </>
      )}
    </div>
  );
};

export default AddTask;
