import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  videoCategory: '',
  videoSubCategory: '',
  tagline: '',
  videoTitle: '',
  description: '',
  courseOutcome: '',
  requirements: '',
  imageUpload: '',
  videoUpload: '',
  difficultyLevel: ' ',
  courseKeyWord: '',
}

export const overViewDataSlice = createSlice({
  name: 'overViewData',
  initialState,
  reducers: {
    storeoverViewData: (state, action) => {
      console.log('overViewDataSlice', action.payload)
      state.videoCategory = action.payload.videoCategory
      state.videoSubCategory = action.payload.videoSubCategory
      state.tagline = action.payload.tagline
      state.videoTitle = action.payload.videoTitle
      state.description = action.payload.description
      state.courseOutcome = action.payload.courseOutcome
      state.requirements = action.payload.requirements

      state.difficultyLevel = action.payload.difficultyLevel
      state.courseKeyWord = action.payload.courseKeyWord
    },
    storeoverViewVideo: (state, action) => {
      state.videoUpload = action.payload.videoUpload
    },
    storeoverViewPhoto: (state, action) => {
      state.imageUpload = action.payload.imageUpload
    },
  },
})

export const {
  storeoverViewData,
  storeoverViewVideo,
  storeoverViewPhoto,
} = overViewDataSlice.actions

export default overViewDataSlice
