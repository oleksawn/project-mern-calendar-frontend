import Task from '../../Task/Task';
import { useState } from 'react';
import dayjs from 'dayjs';

const TimedItem = ({ task, setTopZIndex, topZIndex }) => {
  const [tmpZIndex, setTmpZIndex] = useState(99);

  const handleTaskClick = () => {
    setTmpZIndex(topZIndex + 1);
    setTopZIndex(topZIndex + 1);
  };

  let minutesShift = dayjs(task.date.dates[0].date).minute() % 15;

  return (
    <div
      style={{
        width: 280,
        position: 'absolute',
        top: minutesShift,
        left: 0,
        zIndex: tmpZIndex,
        padding: 0,
        margin: 0,
      }}
    >
      <Task
        task={task}
        block="timeline"
        setTopZIndex={setTopZIndex}
        handleClick={handleTaskClick}
      />
    </div>
  );
};
export default TimedItem;
