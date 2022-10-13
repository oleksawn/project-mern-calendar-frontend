import dayjs from 'dayjs';
var isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

export const createHoursCells = () => {
  const cells = [];
  for (let i = 0; i < 24; i++) {
    cells.push({ hours: i });
  }
  return cells;
};

export const createMinutesCells = () => {
  const cells = [];
  for (let i = 0; i < 60; i += 15) {
    cells.push({ minutes: i });
  }
  return cells;
};

export const createTimeBoxes = (minuteContainerWidth, timeBoxWidth) => {
  const boxes = [];
  let w = Math.floor(minuteContainerWidth / timeBoxWidth);
  for (let i = 0; i < w; i++) {
    boxes.push(i);
  }
  return boxes;
};

export const filterTasksByHour = (tasks, hour) => {
  return tasks.filter((task) => {
    for (let i = 0; i < task.date.dates.length; i++) {
      if (dayjs(task.date.dates[i].date).hour() === hour) {
        return true;
      }
    }
    return false;
  });
};

export const filterTasksByMinute = (tasks, minute) => {
  return tasks.filter((task) => {
    for (let i = 0; i < task.date.dates.length; i++) {
      if (
        dayjs(task.date.dates[i].date).isBetween(
          dayjs(task.date.dates[i].date).minute(minute),
          dayjs(task.date.dates[i].date).minute(minute + 15),
          'minute',
          '[)'
        )
      ) {
        return true;
      }
    }
    return false;
  });
};

export const sortTasksByDate = (tasks) => {
  return tasks.sort(
    (a, b) => dayjs(a.date.dates[0].date) - dayjs(b.date.dates[0].date)
  );
};
