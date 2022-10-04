import dayjs from 'dayjs';
import Task from '../../Task/Task';
import { Container } from '@mui/material';

const Minute = ({ minute, tasks }) => {
  return (
    <div
      className="timelog-minute"
      style={{
        height: 10,
        width: 450,
        border: '1px solid grey',
        fontSize: 6,
        position: 'relative',
        backgroundColor: tasks.length > 0 ? 'yellow' : 'white'
      }}
    >
      {minute}
      {tasks.map((task, i) => (
        <Container key={i} sx={{ position: 'absolute', zIndex: 1000 }}>
          <Task task={task} />
        </Container>
      ))}
    </div>
  );
};
export default Minute;
