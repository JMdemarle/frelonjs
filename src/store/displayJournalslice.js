import { FlashOnRounded } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit'
// Slice


const displayJournalSlice = createSlice({
  name: 'displayJournal',
  initialState:
  {
    affLesThemes: false,
    affTheme: false,
    affModTheme: false,
    affCreeTheme: false,
    affDelTheme: false,

    affLesEntrees: false,
    affEntree: false,
    affModEntree: false,
    affCreeEntree: false,
    affDelEntree: false,

  },
  reducers: {


    //- Les Themes
    setAffModTheme: (state, action) => {
      switch (action.payload) {
        case false: { state.affModTheme = action.payload; break; }
        case true: { state.affModTheme = action.payload; break; }
        default: { state.affModTheme = false; break; }
      }
    },

    setAffCreeTheme: (state, action) => {
      switch (action.payload) {
        case false: { state.affCreeTheme = action.payload; break; }
        case true: { state.affCreeTheme = action.payload; break; }
        default: { state.affCreeTheme = false; break; }
      }
    },

    setAffDelTheme: (state, action) => {
      switch (action.payload) {
        case false: { state.affDelTheme = action.payload; break; }
        case true: { state.affDelTheme = action.payload; break; }
        default: { state.affDelTheme = false; break; }
      }
    },

    setAffTheme: (state, action) => {
      switch (action.payload) {
        case false: { state.affTheme = action.payload; break; }
        case true: { state.affTheme = action.payload; break; }
        default: { state.affTheme = false; break; }
      }
    },

    setAffLesThemes: (state, action) => {
      switch (action.payload) {
        case false: { state.affLesThemes = action.payload; break; }
        case true: { state.affLesThemes = action.payload; break; }
        default: { state.affLesThemes = false; break; }
      }
    },
    setAffModEntree: (state, action) => {
      switch (action.payload) {
        case false: { state.affModEntree = action.payload; break; }
        case true: { state.affModEntree = action.payload; break; }
        default: { state.affModEntree = false; break; }
      }
    },

    setAffCreeEntree: (state, action) => {
      switch (action.payload) {
        case false: { state.affCreeEntree = action.payload; break; }
        case true: { state.affCreeEntree = action.payload; break; }
        default: { state.affCreeEntree = false; break; }
      }
    },

    setAffDelEntree: (state, action) => {
      switch (action.payload) {
        case false: { state.affDelEntree = action.payload; break; }
        case true: { state.affDelEntree = action.payload; break; }
        default: { state.affDelEntree = false; break; }
      }
    },

    setAffEntree: (state, action) => {
      switch (action.payload) {
        case false: { state.affEntree = action.payload; break; }
        case true: { state.affEntree = action.payload; break; }
        default: { state.affEntree = false; break; }
      }
    },

    setAffLesEntrees: (state, action) => {
      switch (action.payload) {
        case false: { state.affLesEntrees = action.payload; break; }
        case true: { state.affLesEntrees = action.payload; break; }
        default: { state.affLesEntrees = false; break; }
      }

    },

  },
});
export default displayJournalSlice.reducer;
export const
  {
    setAffTheme, setAffModTheme, setAffCreeTheme, setAffDelTheme, setAffLesThemes,
    setAffEntree, setAffModEntree, setAffCreeEntree, setAffDelEntree, setAffLesEntrees,
  } = displayJournalSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions
//  const { affReine, modReine } = useSelector(state => state.display)
// Theme