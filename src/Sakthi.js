import App from "./App";
import './Sakthi.css';
import { React,useState } from "react";
import { Reacts,useEffect } from "react"

function Sakthi(){
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
    });
}, []);
  const addTask = () => {
    if (taskName === "") {
      alert("Please enter a task name");
      return;
    }

    const newTask = {
      name: taskName,
      priority: priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTaskName("");
    setPriority("Medium");
  };

  return (
    <div className={`dashboard ${darkMode ? "dark" : ""}`}>
      <button onClick={() => setDarkMode(!darkMode)}>
       {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
       </button>
      <h1>Task Management Dashboard</h1>
      {user && (
  <div className="welcome">
    <h2>Welcome, {user.name} 👋</h2>
    <p>Email: {user.email}</p>
  </div>
)}


      <p>Total Tasks: {tasks.length}</p>

      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button onClick={addTask}>Add Task</button>

      <h2>Tasks</h2>

      {tasks.map((task, index) => (
  <div key={index}>
    <p>Task: {task.name}</p>
    <p>Total Tasks: {tasks.length}</p>

<p>
  Completed Tasks: {tasks.filter(task => task.completed).length}
</p>

<p>
  Pending Tasks: {tasks.filter(task => !task.completed).length}
</p>

    <p>
      Status: {task.completed ? "Completed ✅" : "Pending ⏳"}
    </p>
    <p
  className={
    task.priority === "High"
      ? "high"
      : task.priority === "Medium"
      ? "medium"
      : "low"
  }
>
  Priority: {task.priority}
</p>

    <button
      onClick={() => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = true;
        setTasks(updatedTasks);
      }}
    >
      Mark Completed
    </button>

    <button
      onClick={() => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
      }}
    >
      Delete
    </button>

    <hr />
  </div>
     ))}

    </div>
  );
}

export default Sakthi;

   
