import { createSlice } from '@reduxjs/toolkit'; 
import { drums } from "../../drums";

export const drumMachineSlice = createSlice({
  name: 'drumMachine',
  initialState: {
    drums: drums,
    displayText: 'Click a button or press a key',
  },
  reducers: {
    setDisplayText: (state, action) => {
      state.displayText = action.payload;
    }
  }
});

export const { setDisplayText } = drumMachineSlice.actions;
export default drumMachineSlice.reducer;