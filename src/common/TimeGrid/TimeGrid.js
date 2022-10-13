import { useState } from 'react';
import { createHoursCells } from './components/helpers';
import Hour from './components/Hour';
import { filterTasksByHour } from './components/helpers';

const TimeGrid = ({ tasks, mainEl }) => {
  const hoursCells = createHoursCells();
  const [topZIndex, setTopZIndex] = useState(100);

  return (
    <div
      className="timelog-hours"
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
      }}
    >
      {hoursCells.map(({ hours }, i) => (
        <Hour
          hour={hours}
          key={i}
          tasks={filterTasksByHour(tasks, hours)}
          setTopZIndex={setTopZIndex}
          topZIndex={topZIndex}
        />
      ))}
    </div>
  );
};
export default TimeGrid;
