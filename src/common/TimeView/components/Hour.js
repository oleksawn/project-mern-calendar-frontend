import { createMinutesCells } from './helpers';
import Minute from './Minute';
import dayjs from 'dayjs';
var isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

const Hour = ({ hour, tasks, setTopZIndex, topZIndex }) => {
  const minutesCells = createMinutesCells();

  const filterTasksByMinute = (tasks, minute) => {
    return tasks.filter((task) => {
      for (let i = 0; i < task.date.dates.length; i++) {
        if (
          dayjs(task.date.dates[i].date).isBetween(
            dayjs(task.date.dates[i].date).minute(minute),
            dayjs(task.date.dates[i].date).minute(minute + 15),
            'minute',
            '[)'
          )
        ) {
          return true;
        }
      }
      return false;
    });
  };

  return (
    <div
      className="timelog-hour"
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: hour >= 0 && hour < 8 ? '#e1eaf9' : '#f5f5f5',
        borderRadius: '8px',
        borderBottom: '2px solid #e0e4e7',
      }}
    >
      <div style={{ width: 20, borderRight: '1px solid #e0e4e7' }}>{hour}</div>
      <div
        className="timelog-minutes"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {minutesCells.map(({ minutes }, i) => (
          <Minute
            minute={minutes}
            key={i}
            tasks={filterTasksByMinute(tasks, minutes)}
            setTopZIndex={setTopZIndex}
            topZIndex={topZIndex}
          />
        ))}
      </div>
    </div>
  );
};
export default Hour;
