import { Stack, Typography } from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const Sphere = ({ task }) => {
  return (
    <Stack direction="row">
      <FolderOpenIcon
        sx={{ color: 'spheres.default.main', fontSize: 'large' }}
      />
      <Typography variant="icon" color="task.icon">
        {task.parents ? task.parents : 'Unspecified'}
      </Typography>
    </Stack>
  );
};
export default Sphere;
