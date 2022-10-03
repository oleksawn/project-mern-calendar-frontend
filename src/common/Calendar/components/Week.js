import { createRowCells } from './helpers';
import Day from './Day';

const Week = ({
  selectedDate,
  shownDate,
  fromSunday,
  thisMonth,
  setSelectedDate,
  view
}) => {
  const row = createRowCells(shownDate, fromSunday, thisMonth, view);
  return (
    <>
      <tr className='table__week'>
        {row.map(({ date, type }, i) => (
          <Day
            key={i}
            type={type}
            date={date}
            thisMonth={thisMonth}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            view={view}
          />
        ))}
      </tr>
    </>
  );
};
export default Week;
