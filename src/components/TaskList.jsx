import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map(task => <TaskItem key={task.id} task={task} />)
      ) : (
        <p>No tasks available. Add a new task!</p>
      )}
    </div>
  );
}
