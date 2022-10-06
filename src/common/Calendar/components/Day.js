import dayjs from 'dayjs';

const addClasses = (type, date, selectedDate, view) => {
  let classes = [];
  classes.push('table__day');
  if (view === 'week') classes.push('table__day_week-view');
  else if (view === 'month') classes.push('table__day_month-view');

  if (type === 'this') classes.push('table__day_this');
  else if (type === 'prev') classes.push('table__day_prev');
  else if (type === 'next') classes.push('table__day_next');

  if (date && dayjs().isSame(date, 'day')) classes.push('table__day_today');
  if (date && dayjs(selectedDate).isSame(date, 'day'))
    classes.push('table__day_selected');
  if (date && (date.day() === 0 || date.day() === 6))
    classes.push('table__day_weekend');

  return classes.join(' ');
};

const Day = ({ type, date, selectedDate, setSelectedDate, view }) => {
  const handleSelect = () => {
    if (date) setSelectedDate({ date: date, time: false, view: 'day' });
  };

  return (
    <td
      className={addClasses(type, date, selectedDate.date, view)}
      data-date={date}
      onClick={handleSelect}
    >
      {date && <span className="day__date">{date.format('DD')}</span>}
    </td>
  );
};
export default Day;
