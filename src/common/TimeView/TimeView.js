import { createHoursCells } from './components/helpers';
import Hour from './components/Hour';
import dayjs from 'dayjs';

const TimeView = ({ tasks }) => {
  const hoursCells = createHoursCells();

  const filterTasksByHour = (tasks, hour) => {
    return tasks.filter((task) => {
      for (let i = 0; i < task.date.dates.length; i++) {
        if (dayjs(task.date.dates[i].date).hour() == hour) {
          return true;
        }
      }
      return false;
    });
  };

  return (
    <div>
      <div
        className="timelog-hours"
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 2,
        }}
      >
        {hoursCells.map(({ hours }, i) => (
          <Hour hour={hours} key={i} tasks={filterTasksByHour(tasks, hours)} />
        ))}
      </div>
    </div>
  );
};
export default TimeView;
