import { useSelector } from 'react-redux/es/exports';
import { useState } from 'react';
import dayjs from 'dayjs';
import { Paper, CircularProgress, Typography } from '@mui/material';
import Task from '../../common/Task/Task';
import { useRef } from 'react';
// import { Box } from '@mui/system';

const Dated = ({ dateForView }) => {
  const { tasks, error, status } = useSelector((state) => state.tasks) || []; // get state from store

  const getDayTasks = () => {
    // console.log('get Day tasks', tasks);
    return tasks.filter((task) => {
      if (task.date.inside === false) {
        for (let i = 0; i < task.date.dates.length; i++) {
          if (
            task.date.dates[i].time === false &&
            dayjs(task.date.dates[i].date).isSame(dateForView.date, 'day')
          ) {
            return true;
          }
        }
        return false;
      }

      if (task.type === 'day') {
        return dayjs(task.date).isSame(dateForView.date, 'day');
      }
    });
  };

  const [taskOrder, setTaskOrder] = useState(null);
  const draggedItem = useRef(null);
  const box = useRef(null);

  const orderTasks = (tasks) => {
    if (taskOrder === null) {
      // console.log('no order');
      setTaskOrder(
        tasks.map((task) => {
          return task._id;
        })
      );
      return tasks;
    } else {
      // console.log('order: ', taskOrder);
      let orderedTasks = taskOrder.map((orderId) =>
        tasks.find((task) => {
          return task._id === orderId;
        })
      );
      // console.log('orderedTasks', orderedTasks);
      return orderedTasks;
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDragEnd = (e) => {
    const newOrder = [...taskOrder];

    const itemId = newOrder[draggedItem.current];
    const boxId = newOrder[box.current];
    newOrder.splice(draggedItem.current, 1);
    newOrder.splice(box.current, 0, itemId);
    
    setTaskOrder(newOrder);
  };


  // console.log('Dated: view, date, tasks for view ', dateForView.time, dateForView.date, datedTasks);
  return (
    <Paper
      className="layout__dated-container"
      sx={{ backgroundColor: 'block.dark', position: 'relative' }}
    >
      {status === 'loading' && (
        <CircularProgress
          sx={{ position: 'absolute', zIndex: 50, top: '30%', left: '42%' }}
        />
      )}
      {error && <p>{error.message}</p>}

      <Typography variant="icon">ToDos for selected date</Typography>

      {dateForView.view === 'day' &&
        getDayTasks().length > 0 &&
        orderTasks(getDayTasks()).map((task, i) => {
          if (task) {
            return (
              <div
                key={task._id}
                draggable
                onDragStart={(e) => (draggedItem.current = i)}
                onDragEnter={(e) => (box.current = i)}
                onDragOver={onDragOver}
                onDragEnd={onDragEnd}
                style={{
                  width: '100%',
                  paddingTop: '6px',
                  marginTop: '2px',
                }}
                id={task._id}
                className="box"
              >
                <Task task={task} block="dated" dateForView={dateForView} />
              </div>
            );
          }
        })}
    </Paper>
  );
};
export default Dated;

/*
make an element * draggable by adding the “draggable” attribute
make an area droppable by implementing the * “dragover” event
capture the drag data by implementing the * “dragstart” event
capture the drop by implementing the * “drop” event
implement the * “drag” event that is fired as the element is being dragged
store the intermediate data in the * dataTransfer object 
*/
