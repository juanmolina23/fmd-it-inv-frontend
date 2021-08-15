import {
  createReducer,
  createAction,
  current,
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit"
import axios from "axios"

//Initial State
const initialState = {
  devices: []
}

//Thunk
export const getAllDevices = createAsyncThunk(
  "devices/getAllDevicesStatus",
  async () => {
    const deviceList = await axios.get("http://localhost:3000/devices")
    return deviceList.data
  }
)

//Reducer as Slice
export const deviceSlice = createSlice({
  name: "devices",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllDevices.fulfilled, (state, action) => {
      const devicesArr = action.payload

      devicesArr.forEach(device => {
        state.devices.push(device)
      })
    })
  }
})

export default deviceSlice.reducer
