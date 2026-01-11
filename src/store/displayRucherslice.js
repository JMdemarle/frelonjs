import { FlashOnRounded } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit'
// Slice


const displayRucherSlice = createSlice({
  name: 'displayRucher',
  initialState:
  {
    affRucher: false,
    affTrieRucher: false,
    affModRucher: false,
    affCreeRucher: false,
    affDelRucher: false,

    affColonie: false,
    affLesColoniesDuRucher : false,
    affModColonie: false,
    affCreeColonie: false,
    affDelColonie: false,
    affModDelColonie: false,
    affTrieColonie: false,

    affVisite: false,
    affModVisite: false,
    affCreeVisite: false,
    affDelVisite: false,
    affLesVisites: false,

    affComptage: false,
    affModComptage: false,
    affCreeComptage: false,
    affDelComptage: false,
    affLesComptages: false,

    affLesoins: false,
    affSoin: false,
    affModSoin: false,
    affCreeSoin: false,
    affDelSoin: false,
    affNewMultiSoin: false,

    affLesRecoltes: false,
    affRecolte: false,
    affModRecolte: false,
    affCreeRecolte: false,
    affDelRecolte: false,

    affLesObservations: false,
    affObservation: false,
    affModObservation: false,
    affCreeObservation: false,
    affDelObservation: false,

  },
  reducers: {
    setAffRucher: (state, action) => {
      switch (action.payload) {
        case false: { state.affRucher = action.payload; break; }
        case true: { state.affRucher = action.payload; break; }
        default: { state.affRucher = false; break; }
      }
    },

    setAffTrieRucher: (state, action) => {
      switch (action.payload) {
        case false: { state.affTrieRucher = action.payload; break; }
        case true: { state.affTrieRucher = action.payload; break; }
        default: { state.affTrieRucher = false; break; }
      }
    },
    setAffModRucher: (state, action) => {
      switch (action.payload) {
        case false: { state.affModRucher = action.payload; break; }
        case true: { state.affModRucher = action.payload; break; }
        default: { state.affModRucher = false; break; }
      }
    },
    setAffCreeRucher: (state, action) => {
      switch (action.payload) {
        case false: { state.affCreeRucher = action.payload; break; }
        case true: { state.affCreeRucher = action.payload; break; }
        default: { state.affCreeRucher = false; break; }
      }
    },
    setAffDelRucher: (state, action) => {
      switch (action.payload) {
        case false: { state.affDelRucher = action.payload; break; }
        case true: { state.affDelRucher = action.payload; break; }
        default: { state.affDelRucher = false; break; }
      }
    },

    setAffLesColoniesDuRucher: (state, action) => {
      switch (action.payload) {
        case false: { state.affLesColoniesDuRucher = action.payload; break; }
        case true: { state.affLesColoniesDuRucher = action.payload; break; }
        default: { state.affLesColoniesDuRucher = false; break; }
      }
    },

    setAffColonie: (state, action) => {
      switch (action.payload) {
        case false: { state.affColonie = action.payload; break; }
        case true: { state.affColonie = action.payload; break; }
        default: { state.affColonie = false; break; }
      }
    },

    setAffModColonie: (state, action) => {
      switch (action.payload) {
        case false: { state.affModColonie = action.payload; break; }
        case true: { state.affModColonie = action.payload; break; }
        default: { state.affModColonie = false; break; }
      }
    },
    setAffCreeColonie: (state, action) => {
      switch (action.payload) {
        case false: { state.affCreeColonie = action.payload; break; }
        case true: { state.affCreeColonie = action.payload; break; }
        default: { state.affCreeColonie = false; break; }
      }
    },
    setAffDelColonie: (state, action) => {
      switch (action.payload) {
        case false: { state.affDelColonie = action.payload; break; }
        case true: { state.affDelColonie = action.payload; break; }
        default: { state.affDelColonie = false; break; }
      }
    },
    setAffModDelColonie: (state, action) => {
      switch (action.payload) {
        case false: { state.affModDelColonie = action.payload; break; }
        case true: { state.affModDelColonie = action.payload; break; }
        default: { state.affModDelColonie = false; break; }
      }
    },

    setAffTrieColonie: (state, action) => {
      switch (action.payload) {
        case false: { state.affTrieColonie = action.payload; break; }
        case true: { state.affTrieColonie = action.payload; break; }
        default: { state.affTrieColonie = false; break; }
      }
    },

    setAffModVisite: (state, action) => {
      switch (action.payload) {
        case false: { state.affModVisite = action.payload; break; }
        case true: { state.affModVisite = action.payload; break; }
        default: { state.affModVisite = false; break; }
      }
    },

    setAffCreeVisite: (state, action) => {
      switch (action.payload) {
        case false: { state.affCreeVisite = action.payload; break; }
        case true: { state.affCreeVisite = action.payload; break; }
        default: { state.affCreeVisite = false; break; }
      }
    },

    setAffDelVisite: (state, action) => {
      switch (action.payload) {
        case false: { state.affDelVisite = action.payload; break; }
        case true: { state.affDelVisite = action.payload; break; }
        default: { state.affDelVisite = false; break; }
      }
    },

    setAffVisite: (state, action) => {
      switch (action.payload) {
        case false: { state.affVisite = action.payload; break; }
        case true: { state.affVisite = action.payload; break; }
        default: { state.affVisite = false; break; }
      }
    },

    setAffLesVisites: (state, action) => {
      switch (action.payload) {
        case false: { state.affLesVisites = action.payload; break; }
        case true: { state.affLesVisites = action.payload; break; }
        default: { state.affLesVisites = false; break; }
      }
    },

    setAffModSoin: (state, action) => {
      switch (action.payload) {
        case false: { state.affModSoin = action.payload; break; }
        case true: { state.affModSoin = action.payload; break; }
        default: { state.affModSoin = false; break; }
      }
    },

    setAffCreeSoin: (state, action) => {
      switch (action.payload) {
        case false: { state.affCreeSoin = action.payload; break; }
        case true: { state.affCreeSoin = action.payload; break; }
        default: { state.affCreeSoin = false; break; }
      }
    },

    setAffDelSoin: (state, action) => {
      switch (action.payload) {
        case false: { state.affDelSoin = action.payload; break; }
        case true: { state.affDelSoin = action.payload; break; }
        default: { state.affDelSoin = false; break; }
      }
    },

    setAffSoin: (state, action) => {
      switch (action.payload) {
        case false: { state.affSoin = action.payload; break; }
        case true: { state.affSoin = action.payload; break; }
        default: { state.affSoin = false; break; }
      }
    },

    setAffLesSoins: (state, action) => {
      switch (action.payload) {
        case false: { state.affLesSoins = action.payload; break; }
        case true: { state.affLesSoins = action.payload; break; }
        default: { state.affLesSoins = false; break; }
      }
    },

    setAffNewMultiSoin: (state, action) => {
      switch (action.payload) {
        case false: { state.affNewMultiSoin = action.payload; break; }
        case true: { state.affNewMultiSoin = action.payload; break; }
        default: { state.affNewMultiSoin = false; break; }
      }
    },

    // Les comptages
    setAffModComptage: (state, action) => {
      switch (action.payload) {
        case false: { state.affModComptage = action.payload; break; }
        case true: { state.affModComptage = action.payload; break; }
        default: { state.affModComptage = false; break; }
      }
    },

    setAffCreeComptage: (state, action) => {
      switch (action.payload) {
        case false: { state.affCreeComptage = action.payload; break; }
        case true: { state.affCreeComptage = action.payload; break; }
        default: { state.affCreeComptage = false; break; }
      }
    },

    setAffDelComptage: (state, action) => {
      switch (action.payload) {
        case false: { state.affDelComptage = action.payload; break; }
        case true: { state.affDelComptage = action.payload; break; }
        default: { state.affDelComptage = false; break; }
      }
    },

    setAffComptage: (state, action) => {
      switch (action.payload) {
        case false: { state.affComptage = action.payload; break; }
        case true: { state.affComptage = action.payload; break; }
        default: { state.affComptage = false; break; }
      }
    },

    setAffLesComptages: (state, action) => {
      switch (action.payload) {
        case false: { state.affLesComptages = action.payload; break; }
        case true: { state.affLesComptages = action.payload; break; }
        default: { state.affLesComptages = false; break; }
      }
    },

    setAffNewMultiComptage: (state, action) => {
      switch (action.payload) {
        case false: { state.affNewMultiComptage = action.payload; break; }
        case true: { state.affNewMultiComptage = action.payload; break; }
        default: { state.affNewMultiComptage = false; break; }
      }
    },

    //- Les récoltes
    setAffModRecolte: (state, action) => {
      switch (action.payload) {
        case false: { state.affModRecolte = action.payload; break; }
        case true: { state.affModRecolte = action.payload; break; }
        default: { state.affModRecolte = false; break; }
      }
    },

    setAffCreeRecolte: (state, action) => {
      switch (action.payload) {
        case false: { state.affCreeRecolte = action.payload; break; }
        case true: { state.affCreeRecolte = action.payload; break; }
        default: { state.affCreeRecolte = false; break; }
      }
    },

    setAffDelRecolte: (state, action) => {
      switch (action.payload) {
        case false: { state.affDelRecolte = action.payload; break; }
        case true: { state.affDelRecolte = action.payload; break; }
        default: { state.affDelRecolte = false; break; }
      }
    },

    setAffRecolte: (state, action) => {
      switch (action.payload) {
        case false: { state.affRecolte = action.payload; break; }
        case true: { state.affRecolte = action.payload; break; }
        default: { state.affRecolte = false; break; }
      }
    },

    setAffLesRecoltes: (state, action) => {
      switch (action.payload) {
        case false: { state.affLesRecoltes = action.payload; break; }
        case true: { state.affLesRecoltes = action.payload; break; }
        default: { state.affLesRecoltes = false; break; }
      }
    },

    setAffNewMultiRecolte: (state, action) => {
      switch (action.payload) {
        case false: { state.affNewMultiRecolte = action.payload; break; }
        case true: { state.affNewMultiRecolte = action.payload; break; }
        default: { state.affNewMultiRecolte = false; break; }
      }
    },

    //- Les Observations
    setAffModObservation: (state, action) => {
      switch (action.payload) {
        case false: { state.affModObservation = action.payload; break; }
        case true: { state.affModObservation = action.payload; break; }
        default: { state.affModObservation = false; break; }
      }
    },

    setAffCreeObservation: (state, action) => {
      switch (action.payload) {
        case false: { state.affCreeObservation = action.payload; break; }
        case true: { state.affCreeObservation = action.payload; break; }
        default: { state.affCreeObservation = false; break; }
      }
    },

    setAffDelObservation: (state, action) => {
      switch (action.payload) {
        case false: { state.affDelObservation = action.payload; break; }
        case true: { state.affDelObservation = action.payload; break; }
        default: { state.affDelObservation = false; break; }
      }
    },

    setAffObservation: (state, action) => {
      switch (action.payload) {
        case false: { state.affObservation = action.payload; break; }
        case true: { state.affObservation = action.payload; break; }
        default: { state.affObservation = false; break; }
      }
    },

    setAffLesObservations: (state, action) => {
      switch (action.payload) {
        case false: { state.affLesObservations = action.payload; break; }
        case true: { state.affLesObservations = action.payload; break; }
        default: { state.affLesObservations = false; break; }
      }
    },

  },
});
export default displayRucherSlice.reducer;
export const
  { setAffRucher, setAffModRucher, setAffCreeRucher, setAffDelRucher, setAffTrieRucher, 
    setAffLesColoniesDuRucher,
    setAffColonie, setAffModColonie, setAffCreeColonie, setAffDelColonie,  setAffModDelColonie, setAffTrieColonie,
    setAffVisite, setAffModVisite, setAffCreeVisite, setAffDelVisite, setAffLesVisites,
    setAffSoin, setAffModSoin, setAffCreeSoin, setAffDelSoin, setAffLesSoins, setAffNewMultiSoin,
    setAffComptage, setAffModComptage, setAffCreeComptage, setAffDelComptage, setAffLesComptages, setAffNewMultiComptage,
    setAffRecolte, setAffModRecolte, setAffCreeRecolte, setAffDelRecolte, setAffLesRecoltes, setAffNewMultiRecolte,
    setAffObservation, setAffModObservation, setAffCreeObservation, setAffDelObservation, setAffLesObservations,
  } = displayRucherSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions
//  const { affReine, modReine } = useSelector(state => state.display)
// Observation