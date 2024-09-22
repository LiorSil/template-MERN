import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: 100,
};

const tempSlice = createSlice({
  name: "temp",
  initialState,
  reducers: {
    setTemp: (state , action) => {
      state.data = action.payload;
    },
  },
});

export const { setTemp } = tempSlice.actions;


export default tempSlice.reducer;