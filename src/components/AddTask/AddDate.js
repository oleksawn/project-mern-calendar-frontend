import { useState } from 'react';
import { Button, Container, Popover } from '@mui/material';
import Calendar from '../../common/Calendar/Calendar';

const AddDate = ({ taskRef, taskDate, setTaskDate }) => {
  const [selectedDate, setSelectedDate] = useState(taskDate);
  const [open, setOpen] = useState(false);
  const taskWidth =
    taskRef.current && taskRef.current.offsetWidth > 300
      ? taskRef.current.offsetWidth
      : 300;
  const taskHeight =
    taskRef.current && taskRef.current.offsetHeight > 300
      ? taskRef.current.offsetHeight
      : 300;

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
      <Button className="btn_set-date" onClick={() => setOpen(true)} value={taskDate}>
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
        <Container sx={{ width: taskWidth, height: taskHeight }}>
          <Calendar
            calendars={{ amount: 1, main: 1 }}
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
