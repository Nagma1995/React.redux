import { configureStore } from '@reduxjs/toolkit'
import RtkReducer from './RtkReducer'
import React from 'react'

export const Rtkstore = configureStore({
  reducer:{
    userCrud:RtkReducer
  }
})
export default Rtkstore