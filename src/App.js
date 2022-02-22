import { React, useState } from 'react';

import './App.scss';
import Header from './components/Header';
import Button from './components/Button';
import Tasks from './components/Tasks';

// Delete task

function App() {
  const [tasks, setTask] = useState([
    { id: 1, text: 'Appointment', day: 'Fab', remider: true },
    { id: 2, text: 'Appointment 2', day: 'Fab', remider: true },
    { id: 3, text: 'Appointment 3', day: 'Fab', remider: false },
  ]);

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const clicked = () => {
    console.log('hiu');
  };

  return (
    <div className="App">
      <Header title="I like React" />
      <Button text={'Pickles'} onClick={clicked} color="teal" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
