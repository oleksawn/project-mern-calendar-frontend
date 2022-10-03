import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTaskAndRenew } from '../../thunks/thunk-task';
import dayjs from 'dayjs';
import { FormGroup, Input, Button } from '@mui/material';
import ErrorModal from '../../common/ErrorModal';
import AddDateAndTime from './components/AddDateAndTime';
import './AddTask.css';

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState(dayjs());
  const [taskTime, setTaskTime] = useState({ hours: null, minutes: null });
  const { errorTask } = useSelector((state) => state.task) || [];
  const taskRef = useRef();
  const dispatch = useDispatch();

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const hasTime = (time) => {
    if (taskTime.hours && taskTime.minutes) return true;
    else return false;
  };
  const handleTaskSubmit = () => {
    console.log(
      'task submit ',
      taskDate,
      taskTime,
      hasTime
        ? taskDate.hour(taskTime.hours).minute(taskTime.minutes)
        : 'no time'
    );
    dispatch(
      postTaskAndRenew({
        title: taskTitle,
        status: false,
        date: hasTime
          ? taskDate.hour(taskTime.hours).minute(taskTime.minutes)
          : taskDate,
        time: hasTime ? true : false,
      })
    );
    setTaskTitle('');
    setTaskDate(dayjs());
    setTaskTime({ hours: null, minutes: null });
  };

  return (
    <div ref={taskRef} className="task_add">
      {Object.keys(errorTask).length === 0 ? (
        <FormGroup>
          <AddDateAndTime
            taskRef={taskRef}
            taskDate={taskDate}
            setTaskDate={setTaskDate}
            taskTime={taskTime}
            setTaskTime={setTaskTime}
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
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              padding: 0.2,
              fontSize: 14,
              color: 'var(--color-mark-secondary)',
              border: '1px solid var(--color-devide-light)',
              '&:hover': {
                border: '1px solid var(--color-mark-secondary)',
                boxShadow: '10px 10px 10px red',
              },
            }}
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
