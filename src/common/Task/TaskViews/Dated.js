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
        margin: 0,
        marginLeft: '20px',
        padding: '1px',
        borderRight: 24,
        borderColor: 'spheres.default.main',
      }}
      disableGutters
    >
      <AccordionActions
        sx={{
          padding: '0px',
        }}
      >
        <Stack direction="row" sx={{ width: '100%' }}>
          <Stack
            sx={{
              width: '30px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRight: 2,
              borderColor: 'task.divider',
            }}
          >
            <Urgency task={task} />
          </Stack>

          <Stack
            sx={{
              width: '100%',
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
            alignItems: 'flex-end',
            position: 'relative',
            right: '-25px',
          }}
        ></AccordionSummary>
      </AccordionActions>

      <AccordionDetails
        sx={{
          padding: 0,
          alignItems: 'flex-end',
        }}
      >
        <Stack direction="row">
          <Stack
            direction="row"
            sx={{
              width: '100%',
              justifyContent: 'space-between',
              paddingLeft: '30px',
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
