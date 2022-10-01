import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import { getTasks } from './thunks/thunk-task';
import useResize from './hooks/useResize';

import Spheres from './components/Spheres/Spheres';
import DatePicker from './components/DatePicker/DatePicker';
import Dated from './components/Dated/Dated';
import MainView from './components/MainView/MainView';

import './App.css';

function App() {
  const [dateForView, setDateForView] = useState(dayjs());
  const windowSize = useResize();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  useEffect(() => {
    console.log('app after dateForView change');
  }, [dateForView]);

  return (
    <div className="grid_container" style={{height: window.innerHeight}}>
      <Spheres dateForView={dateForView} windowSize={windowSize.window} />
      <DatePicker dateForView={dateForView} setDateForView={setDateForView} />
      <Dated dateForView={dateForView} />
      <MainView dateForView={dateForView} />
    </div>
  );
}
export default App;
