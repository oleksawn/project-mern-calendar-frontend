import { Button, Card, CardContent, Typography, Checkbox } from '@mui/material';
import {useDispatch} from 'react-redux';
import {
  deleteTaskAndRenew,
  changeTaskStatusAndRenew,
} from '../thunks/thunk-task';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Task({ task }) {  
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const handleStatusChange = () => {
    dispatch(changeTaskStatusAndRenew({id: task._id, status: !status}));
  }
  const handleDeleteButton = () => {
    dispatch(deleteTaskAndRenew(task._id));
  };

  useEffect(()=>{
    setStatus(task.status);
  }, [task.status])

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Checkbox
          checked={status}
          onChange={handleStatusChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Button onClick={handleDeleteButton}>delete</Button>
        <Typography sx={{ fontSize: 16 }} color="text.secondary">
          {task.title} {task._id}
        </Typography>
      </CardContent>
    </Card>
  );
}
