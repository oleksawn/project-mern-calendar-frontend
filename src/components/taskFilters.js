import dayjs from 'dayjs';

export const getDayTasks = (tasks, withTime, dateForView) => {
  return tasks.filter((task) => {
    if (task.date.inside === false) {
      for (let i = 0; i < task.date.dates.length; i++) {
        if (withTime) {
          if (
            task.date.dates[i].time &&
            dayjs(task.date.dates[i].date).isSame(dateForView.date, 'day')
          ) {
            return true;
          }
        }
      }
    }
    return false;
  });
};
