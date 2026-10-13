// import logo from './logo.svg';
import './App.css';
import AdmissionFrom from './AdmissionForm.js';
import LoginTask from './Task/LoginTask.js';
import ProjectesTask from './Task/ProjectesTask.js';
import { Routes,Route,Link} from 'react-router-dom';
import HomeTask from './Task/HomeTask.js';
import SkilesTask from './Task/SkilesTask.js';
import AboutTask from './Task/AboutTask.js';
import ContactTask from './Task/ContactTask.js';
import Newwork from './Newwork.js';

function App() {
  return (
    <>

    {/* <AdmissionFrom/> */}
    {/* <LoginTask/> */}
    <Newwork/>
  
    
    {/* <div>
      <Routes>
        <Route path="/" element={<HomeTask/>}/>
        <Route path="/ProjectesTask" element={<ProjectesTask/>}/>
        <Route path="/SkilesTask" element={<SkilesTask/>}/>
        <Route path="/ContactTask" element={<ContactTask/>}/>
        <Route path="/AboutTask" element={<AboutTask/>}/>
        <Route path="LoginTask" element={<LoginTask/>}/>
      </Routes>
        <Link to='/'>HomeTask</Link><br/>
        <Link  to="/LoginTask">LoginTask</Link><br/> 
        <Link  to='/ProjectesTask'>ProjectesTask</Link><br/> 
        <Link  to="/SkilesTask">SkilesTask</Link><br/>
        <Link  to="/AboutTask">AboutTask</Link><br/>
        <Link  to="/ContactTask">ContactTask</Link><br/>
           </div> */}
    </>
  );
}

export default App;
