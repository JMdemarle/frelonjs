import { createSlice } from '@reduxjs/toolkit'
// Slice
const treeSlice = createSlice({
  name: 'arbreGene',
  initialState: {
    arbreAncetre: null,
  },
  reducers: {
    treeStore: (state, action) => {

      state.arbreAncetre = action.payload;
    },
    treeRevoke: (state, action) =>  {
      state.arbreAncetre = null;
    },
  },
});
export default treeSlice.reducer;
export const {treeStore, treeRevoke } = treeSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions