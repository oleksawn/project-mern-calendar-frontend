import MonthView from './MonthView';
import WeekView from './WeekView';
import './calendar.css';

const createElements = (amount, main) => {
  const elements = [];
  let startIndex = 0 - (main - 1);
  let lastIndex = amount + startIndex;
  for (let i = startIndex; i < lastIndex; i++) {
    elements.push({ shownElementShift: i });
  }
  return elements;
};

export default function Calendar({
  blockSize = {width: 280, height: 160},
  elements = {type: 'month', amount: 1, main: 1, },
  fromSunday = false,
  selectedDate,
  setSelectedDate,
}) {
  const elementsArr = createElements(elements.amount, elements.main);

  return (
    <>
      {elements.type === 'month' && (
        <MonthView
          elements={elementsArr}
          fromSunday={fromSunday}
          monthSize={blockSize}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
      {elements.type === 'week' && (
        <WeekView
          elements={elementsArr}
          fromSunday={fromSunday}
          tableSize={blockSize}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
    </>
  );
}
