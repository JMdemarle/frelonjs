import { createSlice } from '@reduxjs/toolkit'
// Slice
const journalSlice = createSlice({
  name: 'journal',
  initialState: {

    leTheme: null,
    lesThemes: null,
    lEntree:null,
    lesEntrees:null



  },
  reducers: {

    leThemeStore: (state, action) => {
      state.leTheme = action.payload;
    },
    leThemeRevoke: (state, action) => {
      state.leTheme = null;
    },

    lesThemesStore: (state, action) => {
      state.lesThemes = action.payload;
    },
    lesThemesRevoke: (state, action) => {
      state.lesThemes = null;
    },

    lEntreeStore: (state, action) => {
      state.lEntree = action.payload;
    },
    lEntreeRevoke: (state, action) => {
      state.lEntree = null;
    },

    lesEntreesStore: (state, action) => {
      state.lesEntrees = action.payload;
    },
    lesEntreesRevoke: (state, action) => {
      state.lesEntrees = null;
    },
  }
});
export default journalSlice.reducer;
export const {
  leThemeStore, leThemeRevoke, lesThemesStore, lesThemesRevoke,
  lEntreeStore, lEntreeRevoke, lesEntreesStore, lesEntreesRevoke,


} = journalSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions