import React, { useState } from 'react';
// import './Login.css';
import './App.css'; 

 function Login() {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill out both field paths.");
      return;
    }

    console.log("Login sequence executing for user payload:", { email, password });
    alert(`Attempting login parameters for: ${email}`);
  };

  return (

      <center>
        <div className='page'>
                <div className="login-wrapper">
      <div className="login-card-container">
        <h1 className="welcome-headline">Welcome Back!</h1>
        
        <form onSubmit={handleLoginSubmit} className="login-form-element">
          <div className="input-group-wrapper">
            <label htmlFor="userEmail">Email Address</label>
            <input 
              type="email" 
              id="userEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required 
            />
          </div>
          <div className="input-group-wrapper">
            <label htmlFor="userPassword">Password</label>
            <input 
              type="password" 
              id="userPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required 
            />
          </div>
          <button type="submit" className="login-action-btn">
            Login &rarr;
          </button>

        </form>
      </div>
    </div>
    </div>
    </center>
    
  )
}
export default Login


// import React, { useState } from 'react';
// import './UtilityApp.css';

// export default function UtilityApp() {
//   // 1. Team Changer State
//   const [names, setNames] = useState('Anna, Ben, Chris, Diana');
//   const [teamCount, setTeamCount] = useState(2);
//   const [teams, setTeams] = useState([]);

//   const makeTeams = () => {
//     
//     const list = names.split(',').map(n => n.trim()).filter(n => n !== '');
//     if (list.length === 0) return alert('Enter some names!');

//     
//     const shuffled = [...list].sort(() => Math.random() - 0.5);
//     const output = Array.from({ length: teamCount }, () => []);

//     shuffled.forEach((name, index) => {
//       output[index % teamCount].push(name);
//     });
//     setTeams(output);
//   };

//   // 2. Random Number State
//   const [min, setMin] = useState(1);
//   const [max, setMax] = useState(100);
//   const [num, setNum] = useState(null);

//   const rollNumber = () => {
//     if (min >= max) return alert('Min must be less than Max!');
//     const randomResult = Math.floor(Math.random() * (max - min + 1)) + min;
//     setNum(randomResult);
//   };

//   // 3. Live Character Counter State
//   const [text, setText] = useState('');

//   return (
//     <div className="app-layout">
//       <h1>Simple Tool Panel</h1>

//       <div className="grid">
//         {/* Box 1: Team Changer */}
//         <div className="box">
//           <h2>👥 Team Changer</h2>
//           <label>Names (comma separated):</label>
//           <input type="text" value={names} onChange={(e) => setNames(e.target.value)} />
          
//           <label>Teams count:</label>
//           <input type="number" min="2" value={teamCount} onChange={(e) => setTeamCount(Number(e.target.value) || 2)} />
          
//           <button onClick={makeTeams}>Create Teams</button>

//           {teams.length > 0 && (
//             <div className="result-box">
//               {teams.map((t, idx) => (
//                 <p key={idx}><strong>Team {idx + 1}:</strong> {t.join(', ') || 'Empty'}</p>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Box 2: Random Number Generator */}
//         <div className="box">
//           <h2>🎲 Number Generator</h2>
//           <div className="row">
//             <div>
//               <label>Min:</label>
//               <input type="number" value={min} onChange={(e) => setMin(Number(e.target.value) || 0)} />
//             </div>
//             <div>
//               <label>Max:</label>
//               <input type="number" value={max} onChange={(e) => setMax(Number(e.target.value) || 0)} />
//             </div>
//           </div>
          
//           <button onClick={rollNumber}>Roll Number</button>
//           {num !== null && <h3 className="big-display">{num}</h3>}
//         </div>

//         {/* Box 3: Live Character Counter */}
//         <div className="box">
//           <h2>📝 Character Counter</h2>
//           <label>Type text below:</label>
//           <textarea value={text} onChange={(e) => setText(e.target.value)} rows="4" placeholder="Start typing..."></textarea>
          
//           <div className="stats">
//             <p>Characters: <strong>{text.length}</strong></p>
//             <p>Words: <strong>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length}</strong></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

