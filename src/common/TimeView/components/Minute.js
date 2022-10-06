import dayjs from 'dayjs';
import Task from '../../Task/Task';
import { Container, Stack } from '@mui/material';
import { useState } from 'react';

const Minute = ({ minute, tasks, setTopZIndex, topZIndex }) => {
  const [tmpZIndex, setTmpZIndex] = useState(99);

  const handleTaskClick = () => {
    console.log('task click', minute, tmpZIndex, topZIndex);
    setTmpZIndex(topZIndex + 1);
    setTopZIndex(topZIndex + 1);
  };
  return (
    <div
      className="timelog-minute"
      style={{
        height: 12,
        width: '100%',
        fontSize: 6,
        position: 'relative',
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: tmpZIndex,
          padding: 0,
          margin: 0,
          alignItems: 'flex-start',
          height: 12,
          overflow: 'visible'
        }}
      >
        {tasks.map((task, i) => (
          <Task
            task={task}
            block="timeline"
            key={i}
            setTopZIndex={setTopZIndex}
            handleClick={handleTaskClick}
          />
        ))}
      </Stack>
    </div>
  );
};
export default Minute;
