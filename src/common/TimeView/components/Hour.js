import { createMinutesCells } from './helpers';
import Minute from './Minute';
const Hour = ({hour}) => {
  const minutesCells = createMinutesCells();
  return (
    <div className="timelog-hour" style={{display: 'flex'}}>
      <div style={{width: 20}}>{hour}</div>
      <div
        className="timelog-minutes"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {minutesCells.map(({ minutes }, i) => (
          <Minute minute={minutes} />
        ))}
      </div>
    </div>
  );
};
export default Hour;
