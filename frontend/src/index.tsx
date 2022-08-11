import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SundaySchoolApp from './sundaySchoolApp';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SundaySchoolApp />
  </React.StrictMode>
);


