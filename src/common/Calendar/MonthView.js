import React, { useState } from 'react';
import Month from './components/Month';
import Control from './components/Control';

export default function MonthView({
  monthSize,
  elements,
  selectedDate,
  setSelectedDate,
}) {
  const [shownDate, setShownDate] = useState(selectedDate.date(1));
  return (
    <div className="calendar">
      <Control
        type="prev"
        elementType="month"
        shownDate={shownDate}
        setShownDate={setShownDate}
      />
      <div className="calendar__months-container">
        {elements.map(({ shownElementShift }) => (
          <Month
            size={monthSize}
            key={shownElementShift}
            selectedDate={selectedDate}
            shownDate={shownDate.add(shownElementShift, 'month')}
            fromSunday={false}
            setSelectedDate={setSelectedDate}
            view='month'
          />
        ))}
      </div>
      <Control
        type="next"
        elementType="month"
        shownDate={shownDate}
        setShownDate={setShownDate}
      />
    </div>
  );
}
