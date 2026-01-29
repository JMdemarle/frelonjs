import { createSlice } from '@reduxjs/toolkit'
// Slice
const frelonSlice = createSlice({
  name: 'frelon',
  initialState: {

    lesCampagnes: null,
    lesPiegesDePiegeur: null,
    lePiege: null,
    lesDerniersRelevesParPiege: null,
    lesRelevesDuPiege: null,
    leReleve: null,

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
    lesRelevesDuPiegeStore: (state, action) => {
      state.lesRelevesDuPiege = action.payload;
    },
    leReleveStore: (state, action) => {
      state.leReleve = action.payload;
    },


  }
});
export default frelonSlice.reducer;
export const {
  lesCampagnesStore, lesPiegesDePiegeurStore, lePiegeStore, lesDerniersRelevesParPiegeStore,
  lesRelevesDuPiegeStore, leReleveStore

} = frelonSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions