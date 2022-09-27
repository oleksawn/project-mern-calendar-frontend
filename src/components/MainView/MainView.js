import AddTask from '../AddTask/AddTask'
import Tasks from '../../common/Tasks/Tasks';

const MainView = ({ dateForView }) => {

  return (
    <div className="main_container container">
      <div className="main_wrapper">
        <Tasks />
      </div>
      <AddTask dateForView={dateForView} />;
    </div>
  );
};
export default MainView;
