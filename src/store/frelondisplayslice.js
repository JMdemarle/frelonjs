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
    affListDernierReleveParPiege: false,
 
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
  },
});
export default displayFrelonSlice.reducer;
export const
  { setAffListPieges, setAffCreePiege, setAffModPiege, setAffDelPiege, setAffListDernierReleveParPiege
  } = displayFrelonSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions
//  const { affReine, modReine } = useSelector(state => state.display)
// Observation