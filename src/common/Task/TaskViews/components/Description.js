import { Typography } from '@mui/material';

const Description = ({ task }) => {
  return (
    <Typography color="task.text">
      {task.description && task.description}
    </Typography>
  );
};
export default Description;
