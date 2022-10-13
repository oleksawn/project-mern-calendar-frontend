import { Stack } from '@mui/material';
import { useRef, useState, useLayoutEffect } from 'react';
import { createTimeBoxes, sortTasksByDate } from './helpers';
import TimedItem from './TimedItem';

const Minute = ({ minute, tasks, setTopZIndex, topZIndex }) => {
  const [timeBoxes, setTimeBoxes] = useState([]);
  let boxesStep = 0;
  const minuteContainer = useRef();
  const timeBoxSize = 18;

  if (tasks.length > 0 && timeBoxes.length > 0) {
    tasks = sortTasksByDate(tasks);
  }

  if (tasks.length > 0 && timeBoxes.length > 0) {
    boxesStep = Math.floor(timeBoxes.length / tasks.length);
  }

  useLayoutEffect(() => {
    setTimeBoxes(
      createTimeBoxes(minuteContainer.current.clientWidth, timeBoxSize)
    );
  }, []);

  return (
    <Stack
      direction="row"
      ref={minuteContainer}
      className="timelog-minute"
      style={{
        height: timeBoxSize,
        fontSize: 6,
        position: 'relative',
      }}
    >
      {timeBoxes.length > 0 &&
        timeBoxes.map((boxIndex) => (
          <div
            key={boxIndex}
            style={{
              width: timeBoxSize,
              height: timeBoxSize,
              position: 'relative',
            }}
          >
            {boxIndex % boxesStep === 0 &&
              timeBoxes.length - boxIndex > boxIndex / boxesStep && (
                //'task'
                <TimedItem
                  task={tasks[boxIndex / boxesStep]}
                  setTopZIndex={setTopZIndex}
                  topZIndex={topZIndex}
                />
              )}
          </div>
        ))}
    </Stack>
  );
};
export default Minute;
