import { createSlice } from '@reduxjs/toolkit'
// Slice
const frelonSlice = createSlice({
  name: 'frelon',
  initialState: {

    lesCampagnes: null,
    lesPiegesDePiegeur: null,
    lePiege: null,
    lesDerniersRelevesParPiege: null,

  },
  reducers: {
    lesCampagnesStore: (state, action) => {
      state.lesCampagnes = action.payload;
    },
    lesPiegesDePiegeurStore: (state, action) => {
      state.lesPiegesDePiegeur = action.payload;
    },
    lePiegeStore: (state, action) => {
      state.lePiege = action.payload;
    },
    lesDerniersRelevesParPiegeStore: (state, action) => {
      state.lesDerniersRelevesParPiege = action.payload;
    },


  }
});
export default frelonSlice.reducer;
export const {
  lesCampagnesStore, lesPiegesDePiegeurStore, lePiegeStore, lesDerniersRelevesParPiegeStore

} = frelonSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions