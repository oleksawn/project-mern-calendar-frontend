import './Calendar.css';
import { ReactSVG } from 'react-svg';
// import LeftArrow from './left-arr.svg';

const Control = ({ type, shownMonth, setShownMonth }) => {
  const handleControl = () => {
    let newShownMonth;
    if (type === 'prev') {
      newShownMonth = shownMonth.clone().set('date', 1).add(-1, 'month');
    } else {
      newShownMonth = shownMonth.clone().set('date', 1).add(1, 'month');
    }
    setShownMonth(newShownMonth);
  };
  return (
    <button
      className={type === 'prev' ? 'arrowBtn prev' : 'arrowBtn next'}
      onClick={handleControl}
    >
      {type === 'prev' ? (
        <ReactSVG src="/left-arr.svg" />
      ) : (
        <ReactSVG src="/right-arr.svg" />
      )}
    </button>
  );
};
export default Control;
