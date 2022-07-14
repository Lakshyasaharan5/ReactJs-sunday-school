import React from 'react'
import {
    Routes, 
    Route,
    useLocation
  } from "react-router-dom";
import AssessmentPage from './Pages/assessment/AssessmentPage';
import ClassAssessmentPage from './Pages/assessmentStudentList/ClassAssessmentPage';
import DashboardPage from './Pages/dashboard/dashboardPage';
import {AnimatePresence} from 'framer-motion'

export default function AnimatedRoutes() {
    const location = useLocation();
    
  return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<DashboardPage />}></Route>
                <Route path="/assessment-studentlist" element={<ClassAssessmentPage />}></Route>
                <Route path="/assessment" element={<AssessmentPage />}></Route>
            </Routes>
        </AnimatePresence>
  );
}
