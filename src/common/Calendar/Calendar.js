import React, { useState } from 'react';
import Month from './Month';
import Control from './Control';
import './Calendar.css';

const createCalendars = (amount, main) => {
  const calendars = [];
  let startIndex = 0 - (main - 1);
  let lastIndex = amount + startIndex;
  for (let i = startIndex; i < lastIndex; i++) {
    calendars.push({ shownMonthShift: i });
  }
  return calendars;
};

export default function Calendar({ calendars, selectedDate, setSelectedDate }) {
  const [shownMonth, setShownMonth] = useState(selectedDate);
  const calendarsArr = createCalendars(calendars.amount, calendars.main);
  return (
    <div className={'calendar'}>
      <Control
        type="prev"
        shownMonth={shownMonth}
        setShownMonth={setShownMonth}
      />
      {calendarsArr.map(({ shownMonthShift }) => (
        <Month
          key={shownMonthShift}
          selectedDate={selectedDate}
          shownMonthShift={shownMonthShift}
          shownMonth={shownMonth}
          fromSunday={false}
          setSelectedDate={setSelectedDate}
        />
      ))}
      <Control
        type="next"
        shownMonth={shownMonth}
        setShownMonth={setShownMonth}
      />
    </div>
  );
}
