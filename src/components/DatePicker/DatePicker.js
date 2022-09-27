import React, { useRef } from 'react';
import Calendar from '../../common/Calendar/Calendar';
import useResize from '../../hooks/useResize';

const DatePicker = ({ dateForView, setDateForView }) => {
  const pickerRef = useRef();
  const size = useResize({ picker: pickerRef });
  // console.log('picker', pickerRef.current);
  const [SMALL_WINDOW] = size.window;
  const pickerWidth = pickerRef.current && pickerRef.current.clientWidth;

  const CALENDAR_SIZE = SMALL_WINDOW
    ? { width: 240, height: 140 }
    : { width: 300, height: 160 };
  const CALENDARS_AMOUNT = Math.floor(pickerWidth / CALENDAR_SIZE.width);

  return (
    <div className="calendar_container container" ref={pickerRef}>
      <Calendar
        monthSize={{ width: CALENDAR_SIZE.width, height: CALENDAR_SIZE.height }}
        calendars={{ amount: CALENDARS_AMOUNT, main: 1 }}
        selectedDate={dateForView}
        setSelectedDate={setDateForView}
      />
    </div>
  );
};
export default DatePicker;
