import { Stack, Typography, Checkbox } from '@mui/material';

const Title = ({ task, status, handleStatusChange }) => {
  return (
    <Stack direction="row" sx={{ width: '100%', alignItems: 'flex-start' }}>
      <Checkbox
        checked={status}
        onChange={handleStatusChange}
        inputProps={{ 'aria-label': 'controlled' }}
        sx={{
          padding: 0,
          color: 'spheres.default.main',
        }}
      />
      <Typography variant="title" color="task.text">
        {task.title}
      </Typography>
    </Stack>
  );
};
export default Title;
