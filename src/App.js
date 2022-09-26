import { useEffect, useState, useReference } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import { getTasks } from './thunks/thunk-task';
import useResizeWindow from './hooks/useResizeWindow';

import Spheres from './components/Spheres/Spheres';
import DatePicker from './components/DatePicker/DatePicker';
import Dated from './components/Dated/Dated';
import MainView from './components/MainView/MainView';

import './App.css';

function App() {
  const [dateView, setDateView] = useState(dayjs());
  // const appRef = useReference();
  const windowSize = useResizeWindow();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <div className="grid_container">
      <Spheres dateView={dateView} windowSize={windowSize}/>
      <DatePicker
        dateView={dateView}
        setDateView={setDateView}
        windowSize={windowSize}
      />
      <Dated dateView={dateView} windowSize={windowSize}/>
      <MainView dateView={dateView} windowSize={windowSize} />
    </div>
  );
}
export default App;
