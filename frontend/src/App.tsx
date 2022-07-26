import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";
import { AuthProvider } from './Hooks/auth';
import AdminDashboardPage from './Pages/adminDashboard/adminDashboardPage';
import AssessmentPage from './Pages/assessment/AssessmentPage';
import ClassAssessmentPage from './Pages/assessmentStudentList/ClassAssessmentPage';
// import Dashboard from './Pages/dashboard/dashboard';
import DashboardPage from './Pages/dashboard/dashboardPage';
import LoginPage from './Pages/login/loginPage';
import { ProtectedRoute } from './Pages/login/ProtectedRoute';
import TeacherProfile from './Pages/profilePage/teacherProfile';
import StudentListPage from './Pages/studentsList/studentListPage';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>

          <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}></Route>
          <Route path="/admindashboard" element={<ProtectedRoute><AdminDashboardPage /></ProtectedRoute>}></Route>
          <Route path="/assessment-studentlist" element={<ProtectedRoute><ClassAssessmentPage /></ProtectedRoute>}></Route>
          <Route path="/assessment" element={<ProtectedRoute><AssessmentPage /></ProtectedRoute>}></Route>
          <Route path="/profile" element={<ProtectedRoute><TeacherProfile /></ProtectedRoute>}></Route>
          <Route path="/students" element={<ProtectedRoute><StudentListPage /></ProtectedRoute>}></Route>
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
