import { createSlice } from '@reduxjs/toolkit'
import cars from '../db/cars_db'

const initialState = {
  cars: cars,
  selectedCar: cars[0].name,
}

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    selectedCar: (state, action) => {
        state.selectedCar = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { selectedCar } = carsSlice.actions

export default carsSlice.reducer