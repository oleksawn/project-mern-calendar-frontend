import { createHoursCells } from './components/helpers';
import Hour from './components/Hour';
import dayjs from 'dayjs';

const TimeView = ({ date, tasks }) => {
  const hoursCells = createHoursCells();

  const filterTasksByHour = (tasks, hour) => {
    return tasks.filter((task) => {
      return dayjs(task.date).hour() == hour;
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
