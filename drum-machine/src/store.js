import { configureStore } from "@reduxjs/toolkit";
import drumMachineReducer from './features/DrumMachine/drumMachineSlice';

export const store = configureStore({
  reducer: {
    drumMachine: drumMachineReducer,
  }
})