import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTaskAndRenew } from '../../thunks/thunk-task';
import dayjs from 'dayjs';
import { FormGroup, Input, Button } from '@mui/material';
import ErrorModal from '../../common/ErrorModal';
import AddDateAndTime from './components/AddDateAndTime';
import './AddTask.css';

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState({ date: dayjs(), time: false });
  const { errorTask } = useSelector((state) => state.task) || [];
  const taskRef = useRef();
  const dispatch = useDispatch();

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleTaskSubmit = () => {
    dispatch(
      postTaskAndRenew({
        emergency: null,
        status: false,
        date: {
          inside: false,
          amount: null,
          repeat: false,
          rool: null,
          dates: [{ date: taskDate.date, time: taskDate.time }],
        },
        title: taskTitle,
        description: null,
        parent: null,
        children: null
      })
    );
    setTaskTitle('');
    setTaskDate({ date: dayjs(), time: false });
  };

  // console.log('1. add task (task date) - ', taskDate);

  return (
    <div ref={taskRef} className="task_add">
      {Object.keys(errorTask).length === 0 ? (
        <FormGroup>
          <AddDateAndTime
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
