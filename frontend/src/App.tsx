import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";
import AssessmentPage from './Pages/assessment/AssessmentPage';
import ClassAssessmentPage from './Pages/assessmentStudentList/ClassAssessmentPage';
// import Dashboard from './Pages/dashboard/dashboard';
import DashboardPage from './Pages/dashboard/dashboardPage';


function App() {
  return (
    <div className="App">

    <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />}></Route>
          <Route path="/assessment-studentlist" element={<ClassAssessmentPage />}></Route>
          <Route path="/assessment" element={<AssessmentPage />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
