import { Paper } from '@mui/material';
import React, { useRef } from 'react';
import Calendar from '../../common/Calendar/Calendar';
import useResize from '../../hooks/useResize';

const DatePicker = ({ dateForView, setDateForView }) => {
  const pickerRef = useRef();
  const size = useResize({ picker: pickerRef });
  const [SMALL_WINDOW] = size.window;
  const pickerWidth = pickerRef.current && pickerRef.current.clientWidth;
  const CALENDAR_SIZE = SMALL_WINDOW
    ? { width: 340, height: 80 }
    : { width: 300, height: 160 };
  const CALENDAR_TYPE = SMALL_WINDOW ? 'week' : 'month';
  const CALENDARS_AMOUNT = SMALL_WINDOW
    ? 2
    : Math.floor(pickerWidth / CALENDAR_SIZE.width);

  return (
    <Paper className="calendar_container container" ref={pickerRef} sx={{backgroundColor: 'block.dark'}}>
      <Calendar
        blockSize={{ width: CALENDAR_SIZE.width, height: CALENDAR_SIZE.height }}
        elements={{
          amount: CALENDARS_AMOUNT,
          type: CALENDAR_TYPE,
          main: 1,
        }}
        fromSunday={false}
        selectedDate={dateForView}
        setSelectedDate={setDateForView}
      />
    </Paper>
  );
};
export default DatePicker;
