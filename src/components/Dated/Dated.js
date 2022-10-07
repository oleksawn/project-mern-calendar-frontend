import { useSelector } from 'react-redux/es/exports';
import { useState } from 'react';
import dayjs from 'dayjs';
import { Paper, CircularProgress, Typography } from '@mui/material';
import Task from '../../common/Task/Task';
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

  const dragStart = (e, position) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  const dragOver = (e) => {
    if (e.target.className === 'box') {
      e.preventDefault();
    }
  };

  const dragEnter = (e) => {
    if (e.target.className === 'box') {
      e.target.style.borderTop = '2px solid #e0e4e7';
    }
  };
  const dragLeave = (e) => {
    if (e.target.className === 'box') {
      e.target.style.borderTop = '2px solid transparent';
    }
  };

  const drop = (e) => {
    if (e.target.className === 'box') {
      const itemId = e.dataTransfer.getData('text/plain');
      if (itemId !== e.target.id) {
        const newOrder = taskOrder.concat();
        const itemIndex = newOrder.indexOf(itemId);
        newOrder.splice(itemIndex, 1);
        console.log(newOrder, 'item ', itemId, itemIndex);
        const boxIndex = newOrder.indexOf(e.target.id);
        newOrder.splice(boxIndex, 0, itemId);
        console.log(newOrder, 'box ', boxIndex);
        console.log(newOrder);
        setTaskOrder(newOrder);
        e.target.style.borderTop = '2px solid transparent';
      }
    }
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
          return (
            <div
              key={task._id}
              draggable
              onDragStart={(e) => dragStart(e, i)}
              onDragOver={dragOver}
              onDrop={drop}
              onDragEnter={dragEnter}
              onDragLeave={dragLeave}
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
