import React from 'react';
import dayjs from 'dayjs';
import Day from './Day';
import './Calendar.css';

const createCells = (date, fromSunday, selectedDate) => {
  const FOUR_WEEKS = 28;
  const FIVE_WEEKS = 35;
  const SIX_WEEKS = 42;
  const daysInMonth = date.clone().daysInMonth();
  const monthStart = fromSunday
    ? date.clone().set('date', 1).day()
    : date.clone().set('date', 1).day() - 1;
  const monthEnd = monthStart + daysInMonth;
  const cellsAmount =
    monthEnd < FOUR_WEEKS
      ? FOUR_WEEKS
      : monthEnd < FIVE_WEEKS
      ? FIVE_WEEKS
      : SIX_WEEKS;
  const cells = [];
  for (let i = 0; i < cellsAmount; i++) {
    if (i < monthStart) {
      cells.push({ date: null, classes: 'prev day' });
    } else if (i < monthEnd) {
      const day = date.clone().set('date', i - monthStart + 1);
      const dayInfo = {
        date: day,
        classes: 'this day',
      };
      if (day.day() === 0 || day.day() === 6) {
        dayInfo.classes = dayInfo.classes + ' weekend';
      }
      if (dayjs().isSame(day, 'day')) {
        dayInfo.classes = dayInfo.classes + ' today';
      }
      if (dayjs(selectedDate).isSame(day, 'day')) {
        dayInfo.classes = dayInfo.classes + ' selected';
      }
      cells.push(dayInfo);
    } else {
      cells.push({ date: null, classes: 'next day' });
    }
  }
  return cells;
};
const createRows = (cells) => {
  const rows = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }
  return rows;
};

export default function Month({
  selectedDate,
  shownMonthShift,
  shownMonth,
  fromSunday,
  setSelectedDate,
}) {
  const shiftedDate = shownMonth.add(shownMonthShift, 'month');
  const cells = createCells(shiftedDate, fromSunday, selectedDate);
  const rows = createRows(cells);
  return (
    <table className="month">
      <caption className="month_caption">{shiftedDate.format('MMMM')}</caption>
      <tbody className="month_body">
        {rows.map((row, i) => (
          <tr className="week" key={i}>
            {row.map((cell, i) => (
              <Day
                key={i}
                classes={cell.classes}
                date={cell.date}
                setSelectedDate={setSelectedDate}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
