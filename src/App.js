import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { Container } from '@mui/material';
import Tasks from './components/Tasks/Tasks';
import Calendar from './common/Calendar/Calendar';
import AddTask from './components/AddTask/AddTask';
import './App.css';

import { getTasks } from './thunks/thunk-task';

function App() {
  const [calendarDate, setCalendarDate] = useState(dayjs());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const CALENDARS_AMOUNT =
    window.innerWidth > 1600 ? 3 : window.innerWidth > 1100 ? 2 : 1;
  return (
    <Container maxWidth="false">
      <div className="grid_container">
        <div className="spheres_container container">
          <Tasks />
        </div>

        <div className="calendar_container container">
          <Calendar
            calendars={{ amount: CALENDARS_AMOUNT, main: 1 }}
            selectedDate={calendarDate}
            setSelectedDate={setCalendarDate}
          />
        </div>

        <div className="dated_container container">
          <Tasks dated={true} date={{ type: 'day', date: calendarDate }} />
        </div>

        <div className="main_container container">
          <AddTask />
        </div>
      </div>
    </Container>
  );
}
export default App;
