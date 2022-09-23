const Day = ({ classes, date, setSelectedDate }) => {
  const handleSelect = () => {
    setSelectedDate(date);
  }
  return (
    <td
      className={classes}
      data-date={date}
      onClick={handleSelect}
    >
      {date && <span className="date">{date.format('DD')}</span>}
    </td>
  );
};
export default Day;
