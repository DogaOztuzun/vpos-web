import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AlertsState {
  error: String,
  info: String,
  warning: String,
  success: String
}

const initialState: AlertsState = {
  error: null,
  info: null,
  warning: null,
  success: null
}

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    setAlertError: (state, action: PayloadAction<String>) => {
      state.error = action.payload
    },
    setAlertWarning: (state, action: PayloadAction<String>) => {
      state.warning = action.payload
    },
    setAlertInfo: (state, action: PayloadAction<String>) => {
      state.info = action.payload
    },
    setAlertSuccess: (state, action: PayloadAction<String>) => {
      state.success = action.payload
    },
    resetAlerts: () => initialState
  },
})

const { actions, reducer } = alertsSlice
// Action creators are generated for each case reducer function
export const { setAlertError, setAlertInfo, setAlertSuccess,
  setAlertWarning, resetAlerts } = actions

export default reducer