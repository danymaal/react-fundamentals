import { React, useState } from 'react';

import './App.scss';
import Header from './components/Header';
import Button from './components/Button';
import Tasks from './components/Tasks';

function App() {
  const clicked = () => {
    console.log('clicked!');
  };

  const [tasks, setTask] = useState([
    { id: 1, text: 'Appointment', day: 'Fab', remider: true },
    { id: 2, text: 'Appointment 2', day: 'Fab', remider: true },
    { id: 3, text: 'Appointment 3', day: 'Fab', remider: false },
  ]);

  return (
    <div className="App">
      <Header title="I like React" />
      <Button onClick={clicked} text={'Pickles'} color="teal" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
