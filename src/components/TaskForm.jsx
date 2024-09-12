import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    createdDate: '',
    dueDate: '',
    status: false,
    priority: 'Medium' 
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task Data:', formData);
    const newTask = {
      ...formData,
      id: Date.now(),
      completed: formData.status
    };

    addTask(newTask);

    setFormData({
      title: '',
      description: '',
      createdDate: '',
      dueDate: '',
      status: false,
      priority: 'Medium'
    });
  };

  return (
    <div className="task-form-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <br />

        <textarea
          name="description"
          placeholder="Task Description"
          rows={10}
          value={formData.description}
          onChange={handleInputChange}
        />
        <br />

        <div className="date-input">
          <label htmlFor="created-date">Created At </label>
          <input
            type="date"
            name="createdDate"
            id="created-date"
            value={formData.createdDate}
            onChange={handleInputChange}
          />
        </div>

        <div className="date-input">
          <label htmlFor="due-date">Submission </label>
          <input
            type="date"
            name="dueDate"
            id="due-date"
            value={formData.dueDate}
            onChange={handleInputChange}
          />
        </div>

        <div className="status-priority-wrapper">
          <label>
            <input
              type="checkbox"
              name="status"
              checked={formData.status}
              onChange={handleInputChange}
            />{' '}
            Completed
          </label>

          <div className="priority-select">
            <label htmlFor="priority">Priority</label>
            <select
              name="priority"
              id="priority"
              value={formData.priority}
              onChange={handleInputChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        <br />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
