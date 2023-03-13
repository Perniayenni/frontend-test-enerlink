import { combineReducers, configureStore } from "@reduxjs/toolkit"
import dataReducer from './data'

export const rootReducer = combineReducers({
  data: dataReducer
})

export const store = configureStore({
  reducer: rootReducer
})
