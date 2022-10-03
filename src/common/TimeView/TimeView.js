import {createHoursCells} from './components/helpers';
import Hour from './components/Hour';

const TimeView = ({ dateForView }) => {
  console.log('time view!', dateForView);
  const hoursCells = createHoursCells();
  return (
    <div>
      <h3>date for time view: {dateForView.format('DD MMM HH:mm')}</h3>
      <div
        className="timelog-hours"
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 2,
          border: '1px solid black'
        }}
      >
        {hoursCells.map(({ hours }, i) => (
          <Hour hour={hours} />
        ))}
      </div>
    </div>
  );
};
export default TimeView;
