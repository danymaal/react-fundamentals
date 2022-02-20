import { React, useState } from 'react';
import Task from './Task';

const Tasks = ({ tasks }) => {
  return (
    <div className = "tasks">
      {/* List */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
