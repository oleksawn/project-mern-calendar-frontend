import dayjs from 'dayjs';
import { Stack, Typography } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const Time = ({ task }) => {
  return (
    <Stack direction="row" sx={{ marginLeft: '3px' }}>
      <AccessTimeFilledIcon
        sx={{ color: 'spheres.default.main', fontSize: 'large' }}
      />
      <Typography variant="icon" color="task.icon">
        {task.date.dates.length === 1 &&
          dayjs(task.date.dates[0].date).format('HH:mm')}
      </Typography>
    </Stack>
  );
};
export default Time;
