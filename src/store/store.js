import { configureStore } from "@reduxjs/toolkit"
import deviceReducer from "./reducers/devices/deviceSlice"

export const store = configureStore({
  reducer: {
    device: deviceReducer
  }
})
