import { createSlice } from '@reduxjs/toolkit'
// Slice
const reineSlice = createSlice({
  name: 'reine',
  initialState: {
    reine: null,
    lesFillesM: null,
    lesFillesP: null,
    lesReines: [],
  },
  reducers: {
    reineStore: (state, action) => {
      state.reine = action.payload;
      if (action.payload.eleveur == null) {
        state.reine.eleveur = 0;
        state.reine.eleveur_nom = "";        
      }; 
    },
    reineRevoke: (state, action) =>  {
      state.reine = null;
    },
    lesFillesMStore: (state, action) => {
      state.lesFillesM = action.payload; 
    },
    lesFillesMRevoke: (state, action) =>  {
      state.lesFillesM = null;
    },
    lesFillesPStore: (state, action) => {
      state.lesFillesP = action.payload; 
    },
    lesFillesPRevoke: (state, action) =>  {
      state.lesFillesP = null;
    },
    lesReinesStore: (state, action) => {
      state.lesReines = action.payload; 
    },
    lesReinesRevoke: (state, action) =>  {
      state.lesReines = null;
    },    
  },
});
export default reineSlice.reducer;
export const {reineStore, reineRevoke, lesFillesMStore, lesFillesMRevoke, lesFillesPStore, lesFillesPRevoke, 
  lesReinesStore, lesReinesRevoke} = reineSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions