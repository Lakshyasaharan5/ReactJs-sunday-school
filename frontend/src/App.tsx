import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";
import { AuthProvider } from './Hooks/auth';
import AssessmentPage from './Pages/userPages/assessment/AssessmentPage';
// import Dashboard from './Pages/dashboard/dashboard';
import DashboardPage from './Pages/dashboard/dashboardPage';
import LoginPage from './Pages/login/loginPage';
import { ProtectedRoute } from './Pages/login/ProtectedRoute';
import TeacherProfile from './Pages/profilePage/teacherProfile';
import StudentListPage from './Pages/studentsList/studentListPage';
import ClassAssessmentPage from './Pages/userPages/assessmentStudentList/ClassAssessmentPage';
import ManageStudentsPage from './Pages/AdminPages/ManageStudents/ManageStudentsPage';
import ManageTeachersPage from './Pages/AdminPages/ManageTeachers/ManageTeachersPage';
import AddStudent from './Pages/AdminPages/ManageStudents/AddStudent';
import AddTeacher from './Pages/AdminPages/ManageTeachers/AddTeacher';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>

          <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}></Route>
          <Route path="/assessment-studentlist" element={<ProtectedRoute><ClassAssessmentPage /></ProtectedRoute>}></Route>
          <Route path="/assessment" element={<ProtectedRoute><AssessmentPage /></ProtectedRoute>}></Route>
          <Route path="/profile" element={<ProtectedRoute><TeacherProfile /></ProtectedRoute>}></Route>
          <Route path="/students" element={<ProtectedRoute><StudentListPage /></ProtectedRoute>}></Route>
          <Route path="/managestudents" element={<ProtectedRoute><ManageStudentsPage /></ProtectedRoute>}></Route>
          <Route path="/addstudent" element={<ProtectedRoute><AddStudent /></ProtectedRoute>}></Route>
          <Route path="/manageteachers" element={<ProtectedRoute><ManageTeachersPage /></ProtectedRoute>}></Route>
          <Route path="/addteacher" element={<ProtectedRoute><AddTeacher /></ProtectedRoute>}></Route>
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
