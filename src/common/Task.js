import { Button, Card, CardContent, Typography, Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  deleteTaskAndRenew,
  changeTaskStatusAndRenew,
} from '../thunks/thunk-task';
import { useState } from 'react';
import { useEffect } from 'react';
import dayjs from 'dayjs';

export default function Task({ task }) {
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
    <Card sx={{ minWidth: 275 }} className="task" data-id={task._id}>
      <CardContent>
        <Checkbox
          checked={status}
          onChange={handleStatusChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Button onClick={handleDeleteButton}>delete</Button>
        <Typography sx={{ fontSize: 16 }} color="text.secondary">
          {task.title}
          {task.date && dayjs(task.date).format('DD MMM')}
          {task.time && dayjs(task.date).format('HH:mm')}
          {task.time && console.log(task.title, task.date)}
        </Typography>
      </CardContent>
    </Card>
  );
}
