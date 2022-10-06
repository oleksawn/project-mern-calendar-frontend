import { Stack } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Buttons = ({ task, handleDeleteButton }) => {
  return (
    <Stack direction="row">
      <DeleteOutlineIcon
        onClick={handleDeleteButton}
        sx={{
          cursor: 'pointer',
          margin: '0 6px',
          color: 'spheres.default.main',
        }}
      />
    </Stack>
  );
};
export default Buttons;
