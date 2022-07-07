import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";
import Dashboard from './Pages/dashboard/dashboard';
import Assessment from './Pages/assessment/Assesment';
import AssessmentStudentList from './Pages/assessmentStudentList/assessmentStudentList';

function App() {
  return (
    <div className="App">

    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/assessment" element={<Assessment />}></Route>
          <Route path="/assessment-studentlist" element={<AssessmentStudentList />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
