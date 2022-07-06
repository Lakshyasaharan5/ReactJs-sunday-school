import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";
import Dashboard from './Pages/dashboard';

function App() {
  return (
    <div className="App">

    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
