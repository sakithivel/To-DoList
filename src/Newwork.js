import React, { useState } from 'react';
;

 function Newwork() {

  const [Names,setNames]=useState();
  const [TeamCount,setTeamCount]=useState(0);
  const [Teams,setTeams]=useState([]);
  const [min,setMin]=useState(0);
  const [max,setMax]=useState(0);
  const [num,setNum]=useState(null);
 
  const makeTeams = () => {
    const list = Names.split(',').map(n => n.trim()).filter(n => n !== '');
    if (list.length === 0) return alert('Enter Names!');

    const input=[...list].sort(() => Math.random());
    const output=Array.from({ length: TeamCount }, ()=>[]);

    input.forEach((name,index) => {
      output[index%TeamCount].push(name);
    });
    setTeams(output);
  };

  const rollNumber = () => {
    if (min >= max) return alert('Min must be less than Max!');
    const randomResult = Math.floor(Math.random()*(1)) + min;
    setNum(randomResult);
  };

  return (
    <div className="app-layout">
      <div className="grid">
      
        <div className="box">
          <h2>Team Changer</h2>
          <label>Names:</label>
          <input type="text" value={Names}onChange={(e)=>setNames(e.target.value)} /><br/>
          
          <label>Teams count:</label>
          <input type="num" min="2" value={TeamCount}onChange={(e) => setTeamCount(Number(e.target.value) || 2)} /> 
          <button onClick={makeTeams}>Create Teams</button>
          {Teams.length > 0 && (
            <div className="result-box">
              {Teams.map((pen,id)=>(
                <p key={id}><strong>Team{id+1}:</strong> 
                {pen.join(',')||'Empty'}</p>))}
            </div>
          )}
        </div>        
        <div className="box">
          <h2>Number Generator</h2>
          <div className="row">
            <div>
              <label>Min:</label>
              <input type="num"value={min}onChange={(e)=>setMin(Number(e.target.value) || 0)} />
            </div>
            <div>
              <label>Max:</label>
              <input type="num" value={max}onChange={(e)=>setMax(Number(e.target.value) || 0)} />
            </div>
          </div>
          
          <button onClick={rollNumber}>Roll Number</button>
          {num !== null && <h3 className="big-display">{num}</h3>}
        </div>
       
      </div>
    </div>
  );
}
export default Newwork;
