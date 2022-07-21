import { configureStore } from '@reduxjs/toolkit';
import AssessmentReducer from './classAssessment';
import AuthReducer from './authSlice'

const store = configureStore({
  reducer: {
    assessment:AssessmentReducer,
    auth:AuthReducer
  },
})
export default store;
