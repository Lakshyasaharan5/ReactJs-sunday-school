import { configureStore } from '@reduxjs/toolkit';
import AssessmentReducer from './classAssessment';


const store = configureStore({
  reducer: {
    assessment:AssessmentReducer
  },
})
export default store;
