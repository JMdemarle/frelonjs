import { FlashOnRounded } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit'
// Slice


const displayFrelonSlice = createSlice({
  name: 'displayFrelon',
  initialState:
  {
    affListPieges: false,
    affCreePiege: false,
    affModPiege: false,
    affDelPiege: false,
    affListReleves: false,
    affListDernierReleveParPiege: false,
    affCreeReleve: false,
    affModReleve: false,
    affDelReleve: false

  },
  reducers: {
    setAffListPieges: (state, action) => {
      switch (action.payload) {
        case false: { state.affListPieges = action.payload; break; }
        case true: { state.affListPieges = action.payload; break; }
        default: { state.affListPieges = false; break; }
      }
    },
    setAffCreePiege: (state, action) => {
      switch (action.payload) {
        case false: { state.affCreePiege = action.payload; break; }
        case true: { state.affCreePiege = action.payload; break; }
        default: { state.affCreePiege = false; break; }
      }
    },
    setAffModPiege: (state, action) => {
      switch (action.payload) {
        case false: { state.affModPiege = action.payload; break; }
        case true: { state.affModPiege = action.payload; break; }
        default: { state.affModPiege = false; break; }
      }
    },
    setAffDelPiege: (state, action) => {
      switch (action.payload) {
        case false: { state.affDelPiege = action.payload; break; }
        case true: { state.affDelPiege = action.payload; break; }
        default: { state.affDelPiege = false; break; }
      }
    },
    setAffListDernierReleveParPiege: (state, action) => {
      switch (action.payload) {
        case false: { state.affListDernierReleveParPiege = action.payload; break; }
        case true: { state.affListDernierReleveParPiege = action.payload; break; }
        default: { state.affListDernierReleveParPiege = false; break; }
      }
    },
    setAffListReleves: (state, action) => {
      switch (action.payload) {
        case false: { state.affListReleves = action.payload; break; }
        case true: { state.affListReleves = action.payload; break; }
        default: { state.affListReleves = false; break; }
      }
    },
    setAffCreeReleve: (state, action) => {
      switch (action.payload) {
        case false: { state.affCreeReleve = action.payload; break; }
        case true: { state.affCreeReleve = action.payload; break; }
        default: { state.affCreeReleve = false; break; }
      }
    },
    setAffModReleve: (state, action) => {
      switch (action.payload) {
        case false: { state.affModReleve = action.payload; break; }
        case true: { state.affModReleve = action.payload; break; }
        default: { state.affModReleve = false; break; }
      }
    },
    setAffDelReleve: (state, action) => {
      switch (action.payload) {
        case false: { state.affDelReleve = action.payload; break; }
        case true: { state.affDelReleve = action.payload; break; }
        default: { state.affDelReleve = false; break; }
      }
    },
  },
});
export default displayFrelonSlice.reducer;
export const
  { setAffListPieges, setAffCreePiege, setAffModPiege, setAffDelPiege, setAffListDernierReleveParPiege, setAffListReleves,
    setAffCreeReleve,setAffModReleve, setAffDelReleve
  } = displayFrelonSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions
//  const { affReine, modReine } = useSelector(state => state.display)
// Observation