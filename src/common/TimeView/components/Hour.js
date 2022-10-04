import { createMinutesCells } from './helpers';
import Minute from './Minute';
import dayjs from 'dayjs';
var isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

const Hour = ({ hour, tasks }) => {
  const minutesCells = createMinutesCells();
  const filterTasksByMinute = (tasks, minute) => {
    return tasks.filter((task) => {
      return dayjs(task.date).isBetween(
        dayjs(task.date).minute(minute),
        dayjs(task.date).minute(minute + 15),
        'minute',
        '[)'
      );
    });
  };
  return (
    <div
      className="timelog-hour"
      style={{ display: 'flex', border: '1px solid black' }}
    >
      <div style={{ width: 20 }}>{hour}</div>
      <div
        className="timelog-minutes"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {minutesCells.map(({ minutes }, i) => (
          <Minute
            minute={minutes}
            key={i}
            tasks={filterTasksByMinute(tasks, minutes)}
          />
        ))}
      </div>
    </div>
  );
};
export default Hour;
