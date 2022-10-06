import { useState } from 'react';
import dayjs from 'dayjs';
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
  Checkbox,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Dated = ({
  task,
  status,
  handleStatusChange,
  handleDeleteButton,
  dateForView,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      sx={{
        margin: '4px 8px',
        backgroundColor: 'task.mainBg',
      }}
      disableGutters
    >
      <AccordionActions
        sx={{
          padding: '0px',
          alignItems: 'stretch',
        }}
      >
        <Stack
          direction="row"
          sx={{ width: '100%', backgroundColor: 'task.divider' }}
        >
          <Stack
            sx={{
              width: '28px',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'task.mainBg',
              marginRight: '2px',
            }}
          >
            {/* <StarBorderIcon sx={{
                  color: 'spheres.default.main',
                }}/> */}
          </Stack>

          <Stack
            sx={{
              width: '100%',
              backgroundColor: 'task.mainBg',
            }}
          >
            <Stack
              direction="row"
              sx={{
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Stack direction="row" sx={{ marginLeft: '3px' }}>
                <CalendarMonthIcon
                  sx={{ color: 'spheres.default.main', fontSize: 'large' }}
                />
                <Typography variant="icon" color="task.icon">
                  {task.date.dates.length === 1 &&
                    dayjs(task.date.dates[0].date).format('DD MMM')}
                </Typography>
              </Stack>

              <Stack direction="row">
                <FolderOpenIcon
                  sx={{ color: 'spheres.default.main', fontSize: 'large' }}
                />
                <Typography variant="icon" color="task.icon">
                  {task.parents ? task.parents : 'Unspecified'}
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" sx={{ width: '100%' }}>
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
          </Stack>
        </Stack>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            padding: '0px',
            backgroundColor: 'spheres.default.main',
          }}
        ></AccordionSummary>
      </AccordionActions>

      <AccordionDetails
        sx={{
          padding: 0,
          alignItems: 'flex-end',
        }}
      >
        <Stack direction="row" sx={{ backgroundColor: 'task.divider' }}>
          <Box
            sx={{
              width: '28px',
              backgroundColor: 'task.mainBg',
              marginRight: '2px',
            }}
          ></Box>
          <Stack
            direction="row"
            sx={{
              width: '100%',
              justifyContent: 'space-between',
              backgroundColor: 'task.mainBg',
              borderRight: 24,
              borderColor: 'spheres.default.main',
            }}
          >
            <Typography color="task.text">
              {task.description && task.description}
            </Typography>
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
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
export default Dated;
