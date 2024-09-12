import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function TaskItem({ task }) {
  const { deleteTask, toggleTaskCompletion } = useContext(TaskContext);

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Created on: {task.createdDate}</p>
      <p>Due date: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>

      <button onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}
