import { createSlice } from '@reduxjs/toolkit'
// Slice
const biometrieSlice = createSlice({
  name: 'biometrie',
  initialState: {

    laBiometrie: null,
    lesBiometries: null,
    lesAiles: null,
    lesBioRaces: null,
    bioModifiee: null,
    bioAileHighlighted: -1,
    derniereAction: 'RIEN',
  },
  reducers: {
    laBiometrieStore: (state, action) => {
      state.laBiometrie = action.payload;
    },
    laBiometrieRevoke: (state, action) => {
      state.laBiometrie = null;
    },
    lesAilesStore: (state, action) => {
      state.lesAiles = action.payload;
    },
    lesAilesRevoke: (state, action) => {
      state.lesAiles = null;
    },
    lesBiometriesStore: (state, action) => {
      state.lesBiometries = action.payload;
    },
    lesBiometriesRevoke: (state, action) => {
      state.lesBiometries = null;
    },    
    lesBioRacesStore: (state, action) => {
      state.lesBioRaces = action.payload;
    },
    bioModifieeStore: (state, action) => {
      state.bioModifiee = action.payload;
    },
    bioAileHighlightedStore: (state, action) => {
      state.bioAileHighlighted = action.payload;
    },
    setDerniereAction: (state, action) => {
      // 
      switch (action.payload) {
        case "POINT": { 
          state.derniereAction = action.payload;
          break;
        }
        case "GRAPHE": {
          state.derniereAction = action.payload;
          break;
        }
        default:
          break;
      }
    },
  }
});
export default biometrieSlice.reducer;
export const {
  laBiometrieStore, laBiometrieRevoke, lesBiometriesStore, lesBiometriesRevoke, lesAilesStore, lesAilesRevoke,
  lesBioRacesStore, bioModifieeStore, bioAileHighlightedStore, setDerniereAction


} = biometrieSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions