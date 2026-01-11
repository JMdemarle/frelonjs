import { createSlice } from '@reduxjs/toolkit'
// Slice
const frelonTypeSlice = createSlice({
  name: 'frelontype',
  initialState: {

    lesTypesPieges: null,
    lesTypesInsecte: null,
    lesTypesAppat: null,

  },
  reducers: {
    lesTypesPiegesStore: (state, action) => {
      state.lesTypesPieges = action.payload;
    },
    lesTypesInsecteStore: (state, action) => {
      state.lesTypesInsecte = action.payload;
    },
    lesTypesAppatStore: (state, action) => {
      state.lesTypesAppat = action.payload;
    },
  }
});
export default frelonTypeSlice.reducer;
export const {
  lesTypesPiegesStore,  lesTypesInsecteStore, lesTypesAppatStore

} = frelonTypeSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions