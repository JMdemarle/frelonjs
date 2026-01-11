import { createSlice } from '@reduxjs/toolkit'
// Slice
const cPickersSlice = createSlice({
  name: 'cPicker',
  initialState: {
    cPickers: null,
  },
  reducers: {
    cPickersStore: (state, action) => {
      state.cPickers = action.payload;
    },
    cPickersRevoke: (state, action) =>  {
      state.cPickers = null;
    },
  },
});
export default cPickersSlice.reducer;
export const {cPickersStore, cPickersRevoke } = cPickersSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions