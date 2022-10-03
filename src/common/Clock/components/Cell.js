import { twoDigitTime } from "./helpers";
import './Cell.css'

const Cell = ({type, value, time, handleClick}) => {
  let classes = [];
  classes.push('time-cell');
  if(value === time[type]){
    classes.push('time-cell_selected');
  }
  return <div className={classes.join(' ')} style={{padding: 2}} onClick={()=>handleClick(type, value)}>{twoDigitTime(value)}</div>;
};
export default Cell;
