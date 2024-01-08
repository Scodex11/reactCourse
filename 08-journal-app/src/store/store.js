import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './storeAuth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})