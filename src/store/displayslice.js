import { createSlice } from '@reduxjs/toolkit'
// Slice


const displaySlice = createSlice({
  name: 'display',
  initialState:
  {

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

  },
});
export default displaySlice.reducer;
export const { 
  setAffLogin, setAffResetPassword, seAffModPassword, setAffNewPassword, setTitreBar,

} = displaySlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions
//  const { affReine, modReine } = useSelector(state => state.display)
