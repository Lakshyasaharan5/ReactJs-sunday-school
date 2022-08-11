
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AssessmentReducer from './classAssessment';
import AuthReducer from './authSlice'
import { loadState } from './browserStorage';




const reducers = combineReducers({
    assessment:AssessmentReducer,
    auth:AuthReducer
})

const store = configureStore({
  devTools: true,
  reducer: reducers,
  preloadedState: loadState()
})



export default store;
