import { createSlice } from '@reduxjs/toolkit'
// Slice
const delegueSlice = createSlice({
  name: 'delegue',
  initialState: {

    leDelegue: null,
    lesDelegues: null,




  },
  reducers: {

    leDelegueStore: (state, action) => {
      state.leDelegue = action.payload;
    },
    leDelegueRevoke: (state, action) => {
      state.leDelegue = null;
    },

    lesDeleguesStore: (state, action) => {
      state.lesDelegues = action.payload;
    },
    lesDeleguesRevoke: (state, action) => {
      state.lesDelegues = null;
    },


  }
});
export default delegueSlice.reducer;
export const {
  leDelegueStore, leDelegueRevoke, lesDeleguesStore, lesDeleguesRevoke,


} = delegueSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions