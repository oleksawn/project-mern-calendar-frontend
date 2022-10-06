import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Button, Container, Popover } from '@mui/material';
import Calendar from '../../../common/Calendar/Calendar';
import Clock from '../../../common/Clock/Clock';

const AddDateAndTime = ({ taskRef, taskDate, setTaskDate }) => {
  const [selectedTimeDate, setSelectedTimeDate] = useState(taskDate);
  const [selectedTime, setSelectedTime] = useState(taskDate);
  const [selectedDate, setSelectedDate] = useState(taskDate);
  const [open, setOpen] = useState(false);

  const saveTimeDate = () => {
    setTaskDate(selectedTimeDate);
    setOpen(false);
  };
  const closeDatePicker = () => {
    setSelectedTimeDate(taskDate);
    setOpen(false);
  };

  useEffect(() => {
    setSelectedTimeDate(taskDate);
    setSelectedTime(taskDate);
    setSelectedDate(taskDate);
  }, [taskDate.date]);

  useEffect(() => {
    if (selectedTime.time === true) {
      setSelectedTimeDate({
        date: dayjs(selectedDate.date)
          .clone()
          .hour(dayjs(selectedTime.date).hour())
          .minute(dayjs(selectedTime.date).minute()),
        time: selectedTime.time,
      });
    } else {
      setSelectedTimeDate(selectedDate);
    }
  }, [selectedTime.date, selectedDate.date]);

  return (
    <>
      <Button
        className="btn btn_set-date"
        onClick={() => setOpen(true)}
        sx={{ color: 'var(--color-mark)', padding: 0, fontSize: 12 }}
      >
        {taskDate.time === true
          ? taskDate.date.format('DD MMM HH:mm')
          : taskDate.date.format('DD MMM')}
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
              selectedDate={selectedTime}
              setSelectedDate={setSelectedTime}
            />
          </Container>

          <Button onClick={saveTimeDate}>OK</Button>
          {selectedTimeDate.time === true
            ? selectedTimeDate.date.format('DD MMM HH:mm')
            : selectedTimeDate.date.format('DD MMM')}
        </Container>
      </Popover>
    </>
  );
};
export default AddDateAndTime;
