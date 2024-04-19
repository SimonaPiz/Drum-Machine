import { createSlice } from '@reduxjs/toolkit'; 

export const drumMachineSlice = createSlice({
  name: 'drumMachine',
  initialState: {
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