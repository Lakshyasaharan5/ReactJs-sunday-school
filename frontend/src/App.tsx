import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";
import AssessmentPage from './Pages/assessment/AssessmentPage';
import ClassAssessmentPage from './Pages/assessmentStudentList/ClassAssessmentPage';
import Dashboard from './Pages/dashboard/dashboard';


function App() {
  return (
    <div className="App">

    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/assessment-studentlist" element={<ClassAssessmentPage />}></Route>
          <Route path="/assessment" element={<AssessmentPage />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
