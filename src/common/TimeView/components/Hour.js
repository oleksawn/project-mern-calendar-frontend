import { createMinutesCells } from './helpers';
import Minute from './Minute';
import dayjs from 'dayjs';
var isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

const Hour = ({ hour, tasks }) => {
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
