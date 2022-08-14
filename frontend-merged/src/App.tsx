import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux';
import { debounce } from "debounce"; 

import {store} from './SundaySchoolSrc/redux/store';
import { saveState } from './SundaySchoolSrc/redux/browserStorage';
import BeershebaMainRoutes from './mainSiteSrc/beershebaMainRoutes';
import SundaySchoolRoutes from './SundaySchoolSrc/sundaySchoolRoutes';

// here we subscribe to the store changes
store.subscribe(
  // we use debounce to save the state once each 800ms
  // for better performances in case multiple changes occur in a short time
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<BeershebaMainRoutes />} />
          <Route path='/sunday-school/*' element={<SundaySchoolRoutes />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
