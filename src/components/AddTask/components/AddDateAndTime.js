import { useState } from 'react';
import { Button, Container, Popover } from '@mui/material';
import Calendar from '../../../common/Calendar/Calendar';
import Clock from '../../../common/Clock/Clock';

const AddDateAndTime = ({
  taskRef,
  taskDate,
  setTaskDate,
  taskTime,
  setTaskTime,
}) => {
  const [selectedDate, setSelectedDate] = useState(taskDate); 
  const [selectedTime, setSelectedTime] = useState(taskTime); 
  const [open, setOpen] = useState(false);

  const saveDateTime = () => {
    console.log('ok date time ', selectedTime);
    setTaskDate(selectedDate);
    setTaskTime(selectedTime);
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
        sx={{ color: 'var(--color-mark)', padding: 0, fontSize: 12 }}
      >
        {taskDate ? taskDate.format('DD MMM') : 'set date'}
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
          <Container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Calendar
              elements={{ amount: 1, main: 1, type: 'month' }}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <Clock
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
          </Container>

          <Button onClick={saveDateTime}>OK</Button>
        </Container>
      </Popover>
    </>
  );
};
export default AddDateAndTime;
