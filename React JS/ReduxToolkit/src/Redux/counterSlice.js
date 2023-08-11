import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',

  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload     
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions
// Note this is destructuring going on here. counterSlice.actions is an array of 3 reducer 
//  functions : increment, decrement and incrementByAmount, which are put into the variables 
// before exporting 

export default counterSlice.reducer