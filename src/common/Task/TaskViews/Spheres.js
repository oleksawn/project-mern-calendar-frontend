import { Button, Card, CardContent, Typography, Checkbox } from '@mui/material';
import dayjs from 'dayjs';

const Spheres = ({ task, status, handleStatusChange, handleDeleteButton }) => {
  return (
    <Card>
      <CardContent>
        <Checkbox
          checked={status}
          onChange={handleStatusChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Button onClick={handleDeleteButton}>delete</Button>
        <Typography>
          {task.title}
          {task.date && dayjs(task.date).format('DD MMM')}
          {task.time && dayjs(task.date).format('HH:mm')}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default Spheres;
