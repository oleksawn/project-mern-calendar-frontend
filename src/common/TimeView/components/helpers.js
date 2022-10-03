export const createHoursCells = () => {
  const cells = [];
  for (let i = 0; i < 24; i++) {
    cells.push({ hours: i });
  }
  return cells;
} 

export const createMinutesCells = () => {
  const cells = [];
  for (let i = 0; i < 60; i++) {
    cells.push({ minutes: i });
  }
  return cells;
};
