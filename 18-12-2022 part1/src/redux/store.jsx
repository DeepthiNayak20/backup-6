import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import descriptionSlice from './reducers/ckEditor'
import EmailSlice from './reducers/EmailSlice'
import LoginSlice from './reducers/LoginSlice'
import profileSlice from './reducers/profileSlice'
import regDetailsSlice from './reducers/regDetailSlice'
import superAdminInfo from './reducers/superAdminInfo'

import showProfileSlice from './showProfile'
import overViewDataSlice from './reducers/overViewSlice'
import addVideoSlice from './reducers/addVideo'
import videoLinkSlice from './reducers/videoUploadLink'
import LessonSlice from './reducers/lessonListSlice'

const reducers = combineReducers({
  showProfile: showProfileSlice.reducer,
  Login: LoginSlice.reducer,
  emailSend: EmailSlice.reducer,
  regDetails: regDetailsSlice.reducer,
  superAdmin: superAdminInfo.reducer,
  profile: profileSlice.reducer,
  description: descriptionSlice.reducer,
  overViewData: overViewDataSlice.reducer,
  addVideo: addVideoSlice.reducer,
  videoLink: videoLinkSlice.reducer,
  lesson: LessonSlice.reducer,
})
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['videoLink'],
}
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})
