import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  buyerSource: Object,
  sellerAsk: Object,
  devMode: Boolean
}

const initialState: CounterState = {
  buyerSource: { symbol: 'AVAX', contract: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7' },
  sellerAsk: { symbol: 'USDT', contract: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7' },
  devMode: false
}

export const componentsSlice = createSlice({
  name: 'comp',
  initialState,
  reducers: {
    setBuyerSource: (state, action: PayloadAction<Object>) => {
      state.buyerSource = action.payload
    },
    setSellerAsk: (state, action: PayloadAction<Object>) => {
      state.sellerAsk = action.payload
    },
    setDevMode: (state, action: PayloadAction<Boolean>) => {
      state.devMode = action.payload
    }
  },
})

const { actions, reducer } = componentsSlice
// Action creators are generated for each case reducer function
export const { setBuyerSource, setSellerAsk, setDevMode } = actions

export default reducer