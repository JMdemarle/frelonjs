import { FlashOnRounded } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit'
// Slice


const displayDelegueSlice = createSlice({
  name: 'displayJournal',
  initialState:
  {
    affLesDelegues: false,
    affDelegue: false,
    affModDelegue: false,
    affCreeDelegue: false,
    affDelDelegue: false,


  },
  reducers: {


    //- Les Délégués
    setAffModDelegue: (state, action) => {
      switch (action.payload) {
        case false: { state.affModDelegue = action.payload; break; }
        case true: { state.affModDelegue = action.payload; break; }
        default: { state.affModDelegue = false; break; }
      }
    },

    setAffCreeDelegue: (state, action) => {
      switch (action.payload) {
        case false: { state.affCreeDelegue = action.payload; break; }
        case true: { state.affCreeDelegue = action.payload; break; }
        default: { state.affCreeDelegue = false; break; }
      }
    },

    setAffDelDelegue: (state, action) => {
      switch (action.payload) {
        case false: { state.affDelDelegue = action.payload; break; }
        case true: { state.affDelDelegue = action.payload; break; }
        default: { state.affDelDelegue = false; break; }
      }
    },

    setAffDelegue: (state, action) => {
      switch (action.payload) {
        case false: { state.affDelegue = action.payload; break; }
        case true: { state.affDelegue = action.payload; break; }
        default: { state.affDelegue = false; break; }
      }
    },

    setAffLesDelegues: (state, action) => {
      switch (action.payload) {
        case false: { state.affLesDelegues = action.payload; break; }
        case true: { state.affLesDelegues = action.payload; break; }
        default: { state.affLesDelegues = false; break; }
      }
    },



  },
});
export default displayDelegueSlice.reducer;
export const
  {
    setAffDelegue, setAffModDelegue, setAffCreeDelegue, setAffDelDelegue, setAffLesDelegues,
  } = displayDelegueSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions
//  const { affReine, modReine } = useSelector(state => state.display)
// Delegue