import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTaskAndRenew } from '../../thunks/thunk-task';
import dayjs from 'dayjs';
import { FormGroup, Input, Button } from '@mui/material';
import ErrorModal from '../../common/ErrorModal';
import AddDate from './AddDate';
import './AddTask.css';

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState(dayjs());
  const { errorTask } = useSelector((state) => state.task) || [];
  const taskRef = useRef();
  const dispatch = useDispatch();

  // console.log('add new task: ',errorTask)

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleTaskSubmit = () => {
    dispatch(
      postTaskAndRenew({ title: taskTitle, status: false, date: taskDate })
    );
    setTaskTitle('');
    setTaskDate(dayjs());
  };

  return (
    <div ref={taskRef} className="task_add">
      {Object.keys(errorTask).length === 0 ? (
        <FormGroup>
          <AddDate
            taskRef={taskRef}
            taskDate={taskDate}
            setTaskDate={setTaskDate}
          />
          <Input
            className="input_task-title"
            placeholder="Add new task here..."
            value={taskTitle}
            onChange={(e) => handleTaskTitleChange(e)}
            multiline
          />
          <Button
            className="btn_save-form"
            sx={{ position: 'absolute', bottom: 0, right: 0 }}
            variant="outlined"
            onClick={handleTaskSubmit}
          >
            Save
          </Button>
        </FormGroup>
      ) : (
        <>
          <ErrorModal errorTask={errorTask} anchor={taskRef.current} />
        </>
      )}
    </div>
  );
};

export default AddTask;
