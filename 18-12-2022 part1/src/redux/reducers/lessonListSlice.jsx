import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lesson: [1, 2, 3],
}

export const LessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {
    storelesson: (state, action) => {
      console.log('lessonSlice', state.lesson, action.payload)
      state.push(action.payload)
    },
  },
})

export const { storelesson } = LessonSlice.actions

export default LessonSlice
