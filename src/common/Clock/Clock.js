import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { createHoursCells, createMinutesCells } from './components/helpers';
import Cell from './components/Cell';

export default function Clock({ selectedDate, setSelectedDate }) {
  const [time, setTime] = useState({
    hours: selectedDate.view === 'day' ? null : dayjs(selectedDate.date).hour(),
    minutes:
      selectedDate.view === 'day' ? null : dayjs(selectedDate.date).minute(),
  });
  const hoursCells = createHoursCells();
  const minutesCells = createMinutesCells();

  const handleClick = (type, value) => {
    setTime({ ...time, [type]: value });
  };

  useEffect(() => {
    if (time.hours !== null && time.minutes !== null) {
      setSelectedDate({
        date: dayjs(selectedDate.date).hour(time.hours).minute(time.minutes),
        view: 'time',
      });
    }
  }, [time.hours, time.minutes]);

  return (
    <div
      className="clock"
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: 200,
        overflow: 'hidden',
      }}
    >
      <div
        className="hours__container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'scroll',
        }}
      >
        {hoursCells.map(({ hours }, i) => (
          <Cell
            key={i}
            type="hours"
            value={hours}
            handleClick={handleClick}
            time={time}
          />
        ))}
      </div>
      <div
        className="minutes__container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'scroll',
        }}
      >
        {minutesCells.map(({ minutes }, i) => (
          <Cell
            key={i}
            type="minutes"
            value={minutes}
            handleClick={handleClick}
            time={time}
          />
        ))}
      </div>
    </div>
  );
}
