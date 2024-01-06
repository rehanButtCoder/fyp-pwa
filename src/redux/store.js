import { configureStore } from '@reduxjs/toolkit'
import  counterSlice from './slices/counterSlice.jsx'

export const store = configureStore({
  reducer: {
    counter : counterSlice
  },
})