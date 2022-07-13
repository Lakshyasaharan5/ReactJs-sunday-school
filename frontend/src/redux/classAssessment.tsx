// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit'

export const assessmentSlice = createSlice({
  name: 'classAssessment',
  initialState: {
    assessmentArray: [],
  },
  reducers: {
    initiateArray: (state,action) => {
      state.assessmentArray = action.payload
    },
    updateArray: (state,action) => {
        // const i = state.assessmentArray.findIndex(s=>s.student_id===action.payload.student_id)
    // state.assessmentArray = [...state.assessmentArray,...action.payload]
    state.assessmentArray = state.assessmentArray.map(obj=> action.payload.find(o=>o.student_id === obj.student_id)|| obj);

    },
    deleteArray: (state) => {
      state.assessmentArray = []
    },
  },
})


export const { initiateArray, updateArray, deleteArray } = assessmentSlice.actions

export default assessmentSlice.reducer