import { ReactSVG } from 'react-svg';

const Control = ({ type, elementType, shownDate, setShownDate, view }) => {
  const handleControl = () => {
    let newShownDate;
    if (type === 'prev') {
      newShownDate = shownDate.clone().add(-1, elementType);
    } else {
      newShownDate = shownDate.clone().add(1, elementType);
    }
    setShownDate(newShownDate);
  };

  let classes = [];
  classes.push('controls__arrowBtn');
  if (type === 'prev') classes.push('controls__arrowBtn_prev');
  else classes.push('controls__arrowBtn_next');
  if (view === 'week') classes.push('controls__arrowBtn_week-view');
  else classes.push('controls__arrowBtn_month-view');

  return (
    <button className={classes.join(' ')} onClick={handleControl}>
      {type === 'prev' ? (
        <ReactSVG src="/left-arr.svg" />
      ) : (
        <ReactSVG src="/right-arr.svg" />
      )}
    </button>
  );
};
export default Control;
