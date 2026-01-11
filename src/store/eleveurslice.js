import { createSlice } from '@reduxjs/toolkit'
// Slice
const eleveurSlice = createSlice({
  name: 'eleveur',
  initialState: {
    eleveur: null,
    listdesEleveurs : null,
  },
  reducers: {
    eleveurStore: (state, action) => {
      state.eleveur = action.payload;
    },
    eleveurRevoke: (state, action) =>  {
      state.eleveur = null;
    },
    listEleveurStore: (state, action) => {
      state.listdesEleveurs = action.payload;
    },
    listEleveurRevoke: (state, action) =>  {
      state.listdesEleveurs = null;
    },
  },
});
export default eleveurSlice.reducer;
export const {eleveurStore, eleveurRevoke, listEleveurStore, listEleveurRevolke } = eleveurSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions