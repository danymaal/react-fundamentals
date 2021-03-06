import { React, useState } from 'react';
import Task from './Task';

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div className = "tasks">
      {/* List */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete = {onDelete} />
      ))}
    </div>
  );
};

export default Tasks;
