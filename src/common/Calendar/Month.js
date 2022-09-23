// import React, { useMemo } from 'react';
// import { Dayjs } from 'dayjs';
// import clsx from 'clsx';
// import './Calendar.css';

//   // add to start from prev month
//   const lastMonth = date.subtract(1, 'month');
//   for (let i = 0; i < Math.floor(cellsToAdd / 2); i++) {
//     calendarCells.unshift(prepareCell(lastMonth, lastMonth.daysInMonth() - i));
//   }

//   // add to end from next month
//   const nextMonth = date.add(1, 'month');
//   for (let i = 0; i < Math.round(cellsToAdd / 2); i++) {
//     calendarCells.push(prepareCell(nextMonth, i + 1));
//   }

// //Everything is pretty straightforward here:
// // handleSelectDate is a select date handler that takes advantage of
// //closure and invokes onChange with the needed date.
// // rows is a memoized return value of our getCalendarRows.
// // So it recalculates only then the shown date changes.
// // In the 29–35 lines we render weekdays.
// // In the 37–56 lines we render calendar days rows.
// // Also, we attach proper class names depending on the selected date.

// const Month = ({
//   shownDate,
//   selectedDate,
//   onChange,
// }) => {
//   const handleSelectDate = (value) => {
//     return () => onChange(value);
//   };

//   const rows = useMemo(() => getCalendarRows(shownDate), [shownDate]);

//   return (
//     <>
//       <div className={'DatePickerCalendar__header'}>
//         {rows[0].map(({ value }, i) => (
//           <div key={i} className={'DatePickerCalendar__cell'}>
//             {value.format('dd')}
//           </div>
//         ))}
//       </div>

//       {rows.map((cells, rowIndex) => (
//         <div key={rowIndex} className={'DatePickerCalendar__row'}>
//           {cells.map(({ text, value }, i) => (
//             <div
//               key={`${text} - ${i}`}
//               className={clsx(
//                 'DatePickerCalendar__cell',
//                 'DatePickerCalendar__dayCell',
//                 {
//                   DatePickerCalendar__dayCell_selected:
//                     value.toString() === selectedDate.toString(),
//                 }
//               )}
//               onClick={handleSelectDate(value)}
//             >
//               {text}
//             </div>
//           ))}
//         </div>
//       ))}
//     </>
//   );
// };
// export default Month;

import React from 'react';
import dayjs from 'dayjs';
import Day from './Day';
import './Calendar.css';
// const headers = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// const createHeadersRow = (headers) => {
//   let row = [];
//   for (let i = 0; i < 7; i++) {
//     row.push(<th className="header">{headers[i]}</th>);
//   }
//   return (
//     <thead className="month_head">
//       <tr>{row}</tr>
//     </thead>
//   );
// };

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
