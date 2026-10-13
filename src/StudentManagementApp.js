import React, { useState } from 'react';
import './App.css';


export default function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [studentInput, setStudentInput] = useState({ name: '', age: '', course: '' });
  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!studentInput.name || !studentInput.age || !studentInput.course) return;
    
    setStudents((prev) => [...prev, { ...studentInput, id: Date.now() }]);
    setStudentInput({ name: '', age: '', course: '' }); // Reset form
  };

  // Filtered Students (18 or above)
  const adultStudents = students.filter(student => Number(student.age) >= 18);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      
      {/* Theme Changer */}
      <section className="section">
        <h2>1. Theme Changer</h2>
        <button className="btn" onClick={() => setIsDarkMode(!isDarkMode)}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </section>

      {/* Student Form Input & List */}
      <section className="section">
        <h2>2. Student Roster (Adults Only &ge; 18)</h2>
        <form onSubmit={handleFormSubmit} className="form-group">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={studentInput.name} 
            onChange={handleInputChange} 
          />
          <input 
            type="number" 
            name="age" 
            placeholder="Age" 
            value={studentInput.age} 
            onChange={handleInputChange} 
          />
          <input 
            type="text" 
            name="course" 
            placeholder="Course" 
            value={studentInput.course} 
            onChange={handleInputChange} 
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <h3>Registered Students</h3>
        {adultStudents.length === 0 ? (
          <p>No students 18 or older registered yet.</p>
        ) : (
          <ul className="student-list">
            {adultStudents.map((student) => (
              <li key={student.id}>
                <strong>{student.name}</strong> ({student.age} years old) - {student.course}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Counter */}
      <section className="section">
        <h2>3. Counter</h2>
        <p className="counter-display">{count}</p>
        <div className="btn-group">
          <button className="btn" onClick={() => setCount(count + 1)}>+</button>
          <button className="btn" onClick={() => setCount(count - 1)}>-</button>
          <button className="btn btn-reset" onClick={() => setCount(0)}>Reset</button>
        </div>
      </section>

      {/* Accordion */}
      <section className="section">
        <h2>4. Accordion</h2>
        <div className="accordion">
          <div onClick={() => setIsAccordionOpen(!isAccordionOpen)} className="accordion-header">
            What is React? <span>{isAccordionOpen ? '▲' : '▼'}</span>
          </div>
          {isAccordionOpen && (
            <div className="accordion-body">
              React is a popular open-source JavaScript library developed by Meta for building user interfaces, particularly single-page applications.
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <section className="section">
        <h2>5. Modal</h2>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-danger">
          Delete Item
        </button>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Are you sure?</h3>
              <p>This action cannot be undone.</p>
              <div className="modal-actions">
                <button className="btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button 
                  className="btn btn-danger" 
                  onClick={() => { alert('Item deleted!'); setIsModalOpen(false); }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
