export const startOfWeekHandleSunday = (date) => {
  return date.day() === 0
    ? date.startOf('week').add(-6, 'day')
    : date.startOf('week').add(1, 'day');
};

export const createMonthRows = (date, fromSunday) => {
  const rows = [];

  const monthStartDay = fromSunday
    ? date.startOf('month').day()
    : date.startOf('month').day() - 1 === -1
    ? date.startOf('month').day() + 6
    : date.startOf('month').day() - 1;

  const weeksAmount = Math.ceil((monthStartDay + date.daysInMonth()) / 7);
  const startOfWeek = fromSunday
    ? date.startOf('month').startOf('week')
    : startOfWeekHandleSunday(date.startOf('month'));
  //console.log('1111111 ', date, date.startOf('month'));
  for (let i = 0; i < weeksAmount; i++) {
    rows.push({
      startOfWeek: startOfWeek.add(i * 7, 'day'),
    });
  }
  return rows;
};

export const createRowCells = (date, fromSunday, thisMonth, view) => {
  const row = [];
  const weekStart = fromSunday
    ? date.clone().startOf('week')
    : date.clone().startOf('week').add(1, 'day');

  for (let i = 0; i < 7; i++) {
    const day = weekStart.add(i, 'day');
    if (day.isSame(thisMonth, 'month')) {
      row.push({ date: day, type: 'this' });
    } else if (day.isSame(thisMonth.add(1, 'month'), 'month')) {
      if (view === 'week') row.push({ date: day, type: 'next' });
      else row.push({ date: null, type: 'next' });
    } else if (day.isSame(thisMonth.add(-1, 'month'), 'month')) {
      if (view === 'week') row.push({ date: day, type: 'prev' });
      else row.push({ date: null, type: 'prev' });
    } else {
      if (view === 'week') row.push({ date: day, type: 'distant' });
      else row.push({ date: null, type: 'distant' });
    }
  }
  return row;
};
