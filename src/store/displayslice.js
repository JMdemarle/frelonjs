import { createSlice } from '@reduxjs/toolkit'
// Slice


const displaySlice = createSlice({
  name: 'display',
  initialState:
  {
    affReine: 'NEAN',
    affDisplayReine: false,
    affTabListeReines: false,
    affModReine: false,
    affCreeReine: false,
    affDelReine: false,    
    modReine: true,
    affGenealogie: 'NEAN',
    affFilles: 'NEAN',
    affLogin :false ,
    affResetPassword: false,
    affModPassword: false,
    affNewPassword: false,
    titreBar: ""
  },
  reducers: {
    setAffLogin: (state, action) => {
      switch (action.payload) {
        case false: { state.affLogin = action.payload ; break ; }
        case true: { state.affLogin = action.payload ; break ; }
        default:  { state.affLogin = false ; break ; }  
    }  },

    setAffResetPassword: (state, action) => {
      switch (action.payload) {
        case false: { state.affResetPassword = action.payload ; break ; }
        case true: { state.affResetPassword = action.payload ; break ; }
        default:  { state.affResetPassword = false ; break ; }  
    }  },

    setAffModPassword: (state, action) => {
      switch (action.payload) {
        case false: { state.affModPassword = action.payload ; break ; }
        case true: { state.affModPassword = action.payload ; break ; }
        default:  { state.affModPassword = false ; break ; }  
    }  },

    setAffNewPassword: (state, action) => {
      switch (action.payload) {
        case false: { state.affNewPassword = action.payload ; break ; }
        case true: { state.affNewPassword = action.payload ; break ; }
        default:  { state.affNewPassword = false ; break ; }  
    }  },


    setAffTabListeReines: (state, action) => {
      switch (action.payload) {
        case false: { state.affTabListeReines = action.payload; break; }
        case true: { state.affTabListeReines = action.payload; break; }
        default: { state.affTabListeReines = false; break; }
      }
    },

    setAffDisplayReine: (state, action) => {
      switch (action.payload) {
        case false: { state.affDisplayReine = action.payload; break; }
        case true: { state.affDisplayReine = action.payload; break; }
        default: { state.affDisplayReine = false; break; }
      }
    },
    setAffModReine: (state, action) => {
      switch (action.payload) {
        case false: { state.affModReine = action.payload; break; }
        case true: { state.affModReine = action.payload; break; }
        default: { state.affModReine = false; break; }
      }
    },
    setAffCreeReine: (state, action) => {
      switch (action.payload) {
        case false: { state.affCreeReine = action.payload; break; }
        case true: { state.affCreeReine = action.payload; break; }
        default: { state.affCreeReine = false; break; }
      }
    },    
    setAffDelReine: (state, action) => {
      switch (action.payload) {
        case false: { state.affDelReine = action.payload; break; }
        case true: { state.affDelReine = action.payload; break; }
        default: { state.affDelReine = false; break; }
      }
    },

    setAffReine: (state, action) => {
      switch (action.payload) {
        case "AFFI": {
          state.affReine = action.payload;
          break;
        }
        case "MODI": {
          state.affReine = action.payload;
          break;
        }
        case "CREE": {
          state.affReine = action.payload;
          break;
        }
        default:
          break;
      }

    },
    setAffGenealogie: (state, action) => {
      // 
      switch (action.payload) {
        case "OUI": { 
          state.affGenealogie = action.payload;
          break;
        }
        case "NON": {
          state.affGenealogie = action.payload;
          break;
        }
        default:
          break;
      }
    },
    setAffFilles: (state, action) => {
      // 
      switch (action.payload) {
        case "OUI": {
          state.affFilles = action.payload;
          break;
        }
        case "NON": {
          state.affFilles = action.payload;
          break;
        }
        default:
          break;
      }
    },
    setTitreBar: (state, action) => {
      switch (action.payload) {
        case "CAPTURES": {
          state.titreBar = "Captures - relevés des pièges";
          break;
        }
        case "HOME": {
          state.titreBar = "Suivi des campagnes de piégeage";
          break;
        }

        case "PIEGES": {
          state.titreBar = "Mes pièges";
          break;
        }             
        default:
          break;
      }

    },
    togglemodReine: (state, action) => {
      state.modReine = !state.modReine;
    },
    setmodReine: (state, action) => {
      state.modReine = action.payload;

    },
  },
});
export default displaySlice.reducer;
export const { setAffLogin, setAffResetPassword, seAffModPassword, setAffNewPassword, 
  toggleAffReine, setAffReine, setmodReine, togglemodReine, setAffGenealogie, setTitreBar,
  setAffDisplayReine, setAffModReine, setAffDelReine, setAffCreeReine, setAffTabListeReines,
  setAffFilles } = displaySlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions
//  const { affReine, modReine } = useSelector(state => state.display)
