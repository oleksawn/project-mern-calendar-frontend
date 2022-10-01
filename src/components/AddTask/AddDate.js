import { useState } from 'react';
import { Button, Container, Popover } from '@mui/material';
import Calendar from '../../common/Calendar/Calendar';

const AddDate = ({ taskRef, taskDate, setTaskDate }) => {
  const [selectedDate, setSelectedDate] = useState(taskDate);
  const [open, setOpen] = useState(false);

  const saveDate = () => {
    setTaskDate(selectedDate);
    setOpen(false);
  };
  const closeDatePicker = () => {
    setSelectedDate(taskDate);
    setOpen(false);
  };

  return (
    <>
      <Button
        className="btn btn_set-date"
        onClick={() => setOpen(true)}
        value={taskDate}
        sx={{ color: 'var(--color-mark)', padding: 0, fontSize: 12}}
      >
        {taskDate ? taskDate.format('D MMM') : 'set date'}
      </Button>
      <Popover
        className="popover"
        open={open}
        anchorEl={taskRef.current}
        onClose={closeDatePicker}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Container>
          <Calendar
            elements={{ amount: 1, main: 1, type: 'month' }}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <Button onClick={saveDate}>OK</Button>
        </Container>
      </Popover>
    </>
  );
};
export default AddDate;
