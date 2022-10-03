import Cell from './components/Cell';
import {useState} from 'react';
import { createHoursCells, createMinutesCells } from './components/helpers';

export default function Clock({ selectedTime, setSelectedTime }) {
  const [time, setTime] = useState(selectedTime);
  const hoursCells = createHoursCells();
  const minutesCells = createMinutesCells();
  const handleClick = (type, value) => {
    setTime({...time, [type]: value});
    setSelectedTime({ ...time, [type]: value });
  }
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
