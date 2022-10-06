import dayjs from 'dayjs';
import {
  Stack,
  Typography,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Date = ({task}) => {
  return (
    <Stack direction="row" sx={{ marginLeft: '3px' }}>
      <CalendarMonthIcon
        sx={{ color: 'spheres.default.main', fontSize: 'large' }}
      />
      <Typography variant="icon" color="task.icon">
        {task.date.dates.length === 1 &&
          dayjs(task.date.dates[0].date).format('DD MMM')}
      </Typography>
    </Stack>
  );
};
export default Date;
