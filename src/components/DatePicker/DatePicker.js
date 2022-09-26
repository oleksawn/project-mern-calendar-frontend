import React from 'react';
import Calendar from '../../common/Calendar/Calendar';

const DatePicker = ({ windowSize, dateView, setDateView }) => {
  const [SMALL_WINDOW, MEDIUM_WINDOW, LARGE_WINDOW] = windowSize;
  const CALENDARS_AMOUNT =
    (SMALL_WINDOW && 1) || ((MEDIUM_WINDOW || LARGE_WINDOW) && 2) || 3;
  return (
    <div className="calendar_container container">
      <Calendar
        calendars={{ amount: CALENDARS_AMOUNT, main: 1 }}
        selectedDate={dateView}
        setSelectedDate={setDateView}
      />
    </div>
  );
};
export default DatePicker;
