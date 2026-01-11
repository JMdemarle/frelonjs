import { createSlice } from '@reduxjs/toolkit'
// Slice
const typfecondationSlice = createSlice({
  name: 'typFecondation',
  initialState: {
    typFecondation: null,
  },
  reducers: {
    typfecondationStore: (state, action) => {
      state.typFecondation = action.payload;
    },
    typfecondationRevoke: (state, action) =>  {
      state.typFecondation = null;
    },
  },
});
export default typfecondationSlice.reducer;
export const {typfecondationStore, typfecondationRevoke } = typfecondationSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions