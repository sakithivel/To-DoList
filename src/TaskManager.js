import React, { useState } from 'react';
import './TaskManager.css'; 

export default function TaskManager() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);  
  const [taskInput, setTaskInput] = useState({ title: '', category: '' });
  const [tasks, setTasks] = useState([]);  
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [showOnlyCompleted, setShowOnlyCompleted] = useState(false);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskInput((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskInput.title.trim() || !taskInput.category.trim()) return;

    const newTask = {
      id: Date.now(),
      title: taskInput.title,
      category: taskInput.category,
      isCompleted: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setTaskInput({ title: '', category: '' }); // Reset single useState object
  };

  
  const toggleTaskStatus = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  
  const triggerDeletePrompt = (task) => {
    setTaskToDelete(task);
    setIsModalOpen(true);
  };

  
  const confirmDeleteTask = () => {
    if (taskToDelete) {
      setTasks((prev) => prev.filter((task) => task.id !== taskToDelete.id));
    }
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  
  const displayedTasks = showOnlyCompleted 
    ? tasks.filter((task) => task.isCompleted) 
    : tasks;

  return (
    <div className={`app-wrapper ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      
      {/* Header & Theme Changer */}
      <header className="app-header">
        <h1>☑️ Task Manager</h1>
        <button className="btn toggle-theme" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      {/* Accordion Component */}
      <section className="app-section">
        <div className="accordion">
          <div className="accordion-title" onClick={() => setIsHelpOpen(!isHelpOpen)}>
            <span>❓ How to use this app</span>
            <span>{isHelpOpen ? '▲' : '▼'}</span>
          </div>
          {isHelpOpen && (
            <div className="accordion-content">
              <p>1. Type a task title and category, then click <strong>Add Task</strong>.</p>
              <p>2. Flip statuses between <strong>Pending</strong> and <strong>Completed</strong> inline.</p>
              <p>3. Toggle the status checkbox to run a <strong>filter()</strong> and isolate completed items.</p>
            </div>
          )}
        </div>
      </section>

      {/* Form Management & Metrics Counter */}
      <section className="app-section dashboard-grid">
        <div className="form-card">
          <h3>Create New Task</h3>
          <form onSubmit={handleAddTask} className="task-form">
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              value={taskInput.title}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category (e.g., Work, Home)"
              value={taskInput.category}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-submit">Add Task</button>
          </form>
        </div>

        <div className="metrics-card">
          <h3>Total System Tasks</h3>
          <p className="counter-value">{tasks.length}</p>
        </div>
      </section>

      {/* Task List Section & Filters */}
      <section className="app-section">
        <div className="list-controls">
          <h2>Task Registry</h2>
          <label className="filter-checkbox">
            <input
              type="checkbox"
              checked={showOnlyCompleted}
              onChange={(e) => setShowOnlyCompleted(e.target.checked)}
            />
            Show only completed tasks
          </label>
        </div>

        {displayedTasks.length === 0 ? (
          <p className="empty-notice">No matching tasks found.</p>
        ) : (
          <div className="tasks-grid">
            {displayedTasks.map((task) => (
              <div key={task.id} className={`task-card ${task.isCompleted ? 'completed-border' : ''}`}>
                <div className="task-info">
                  <h4>{task.title}</h4>
                  <span className="badge">{task.category}</span>
                </div>
                <div className="task-actions">
                  <button 
                    className={`btn status-btn ${task.isCompleted ? 'btn-success' : 'btn-warning'}`}
                    onClick={() => toggleTaskStatus(task.id)}
                  >
                    {task.isCompleted ? 'Completed' : 'Pending'}
                  </button>
                  <button className="btn btn-danger" onClick={() => triggerDeletePrompt(task)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h3>Are you sure?</h3>
            <p>You are about to delete the task: <br /><strong>"{taskToDelete?.title}"</strong></p>
            <div className="modal-buttons">
              <button className="btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="btn btn-danger" onClick={confirmDeleteTask}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
