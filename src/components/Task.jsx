import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
  return (
    <div>
      <h3>
        {task.text} <FaTimes onClick = {() => onDelete(task.id)} className="del-btn" />{' '}
        {/* onClick = {() => onDelete(task.id)} */}
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
