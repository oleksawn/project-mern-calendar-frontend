import React, { useState } from 'react';
import Week from './components/Week';
import Control from './components/Control';
import { startOfWeekHandleSunday } from './components/helpers';

export default function WeekView({
  tableSize,
  elements,
  fromSunday,
  selectedDate,
  setSelectedDate,
}) {
  const [shownDate, setShownDate] = useState(
    fromSunday
      ? selectedDate.startOf('week')
      : startOfWeekHandleSunday(selectedDate.date)
  );
  return (
    <div className="calendar" style={{ height: tableSize.height }}>
      <table
        className="calendar__table table"
        style={{ width: tableSize.width }}
      >
        <tbody className="table__body">
          {elements.map(({ shownElementShift }) => {
            return (
              <Week
                key={shownElementShift}
                selectedDate={selectedDate}
                shownDate={shownDate.add(shownElementShift * 7, 'day')}
                thisMonth={shownDate.add(6, 'day')}
                fromSunday={fromSunday}
                setSelectedDate={setSelectedDate}
                view="week"
              />
            );
          })}
        </tbody>
      </table>

      <div className="calendar__controls_week-view">
        <Control
          view='week'
          type="prev"
          elementType="week"
          shownDate={shownDate}
          setShownDate={setShownDate}
        />
        <div className="calendar__titles titles calendar__titles_week_view">
          <h4 className="titles__month-title month-title month-title_week-view">
            {shownDate.add(6,'day').format('MMM')}
          </h4>
          <h4 className="titles__year-title year-title year-title_week-view">
            {shownDate.add(6,'day').format('YYYY')}
          </h4>
        </div>
        <Control
          view='week'
          type="next"
          elementType="week"
          shownDate={shownDate}
          setShownDate={setShownDate}
        />
      </div>
    </div>
  );
}
