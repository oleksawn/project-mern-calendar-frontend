import { useState } from 'react';
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Date from './components/Date';
import Sphere from './components/Sphere';
import Urgency from './components/Urgency';
import Title from './components/Title';
import Buttons from './components/Buttons';
import Description from './components/Description';

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
            <Urgency task={task}/>
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

              <Date task={task} />
              <Sphere task={task} />

            </Stack>

            <Title
              task={task}
              status={status}
              handleStatusChange={handleStatusChange}
            />

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

            <Description task={task} />
            <Buttons task={task} handleDeleteButton={handleDeleteButton} />

          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
export default Dated;
