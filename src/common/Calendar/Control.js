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

// import React from 'react';
// // import { Dayjs } from 'dayjs';
// // import { ChevronDownIcon } from '../../icons/ChevronDownIcon';
// import { changeDateMonth } from './changeDateMonth';
// // changeDateMonth is a function that decides whether
// // we need to add or subtract a year as well.
// import './Calendar.css';
// import clsx from 'clsx';

// const Controls = ({ shownDate, setShownDate }) => {
//   const handleIconClick = (isNextMonth) => {
//     return () => {
//       setShownDate(changeDateMonth(shownDate, isNextMonth));
//     };
//   };

//   return (
//     <div className={'DatePickerSelector'}>
//       <div
//         className={clsx(
//           'DatePickerSelector__icon',
//           'DatePickerSelector__iconLeft'
//         )}
//         onClick={handleIconClick(false)}
//       >
//         {'down icon'}
//       </div>

//       <div className={'DatePickerSelector__date'}>
//         {shownDate.format('MMMM YYYY')}
//       </div>

//       <div
//         className={clsx(
//           'DatePickerSelector__icon',
//           'DatePickerSelector__iconRight'
//         )}
//         onClick={handleIconClick(true)}
//       >
//         {'down icon'}
//       </div>
//     </div>
//   );
// };
// export default Controls;
