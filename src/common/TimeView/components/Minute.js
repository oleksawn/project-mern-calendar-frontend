const Minute = ({minute}) => {
  return (
    <div
      className="timelog-minute"
      style={{height: 10, width: 450 , border: '1px solid grey', fontSize: 6 }}
    >
      {minute}
    </div>
  );
};
export default Minute;
