import React from 'react';
import Week from './Week';
import { createMonthRows } from './helpers';

export default function Month({
  size,
  selectedDate,
  shownDate,
  fromSunday,
  setSelectedDate,
  view
}) {
  const rows = createMonthRows(shownDate, fromSunday);
  return (
    <table
      className="calendar__table table"
      style={{
        width: size ? size.width : 300,
        height: size ? size.height : 200,
      }}
    >
      <caption className="month-title  month-title_month-view">
        {shownDate.format('MMMM')}
      </caption>
      <tbody>
        {rows.map((row, i) => (
          <Week
            key={i}
            selectedDate={selectedDate}
            shownDate={row.startOfWeek}
            thisMonth={shownDate}
            fromSunday={fromSunday}
            setSelectedDate={setSelectedDate}
            view={view}
          />
        ))}
      </tbody>
    </table>
  );
}
