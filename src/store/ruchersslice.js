import { createSlice } from '@reduxjs/toolkit'
// Slice
const rucherssSlice = createSlice({
  name: 'ruchers',
  initialState: {
    apiProprietaire : null,

    lesRuchersDeApi: null,
    lesRuchersDelegation: null,
    lesRuchersTravail: null,
    leRucher: null,

    lesColoniesDeApi: null,
    lesColoniesDelegation : null,
    laColonie: null,
    laColoniePhoto: null,

    lesColoniesDuRucher : null, 

    lesTravauxFaits: null,
    lesTravauxAFaire: null,
    laDerniereVisite: null,
    laVisite: null,
    lesVisites: null,

    leDernierSoin: null,
    leSoin: null,
    lesSoins: null,

    leDernierComptage: null,
    leComptage: null,
    lesComptages: null,

    laDerniereRecolte: null,
    laRecolte: null,
    lesRecoltes: null,

    laDerniereObservation :null,
    lObservation : null,
    lesObservations: null,

    lesHausseVisites: null,

  },
  reducers: {
    apiProprietaireStore: (state, action) => {
      state.apiProprietaire = action.payload;
    },    
    lesRuchersDeApiStore: (state, action) => {
      state.lesRuchersDeApi = action.payload;
    },
    lesRuchersDeApiRevoke: (state, action) => {
      state.lesRuchersDeApi = null;
    },
    lesRuchersTravailStore: (state, action) => {
      state.lesRuchersTravail = action.payload;
    },
    lesRuchersTravailRevoke: (state, action) => {
      state.lesRuchersTravail = null;
    },
    lesRuchersDelegationStore: (state, action) => {
      state.lesRuchersDelegation = action.payload;
    },
    lesRuchersDelegationRevoke: (state, action) => {
      state.lesRuchersDelegation = null;
    },
    leRucherStore: (state, action) => {
      state.leRucher = action.payload;
    },
    leRucherRevoke: (state, action) => {
      state.leRucher = null;
    },


    lesColoniesDuRucherStore: (state, action) => {
      state.lesColoniesDuRucher = action.payload;
    },
    lesColoniesDuRucherRevoke: (state, action) => {
      state.lesColoniesDuRucher = null;
    },

    lesColoniesDeApiStore: (state, action) => {
      state.lesColoniesDeApi = action.payload;
    },
    lesColoniesDeApiRevoke: (state, action) => {
      state.lesColoniesDeApi = null;
    },
    lesColoniesDelegationStore: (state, action) => {
      state.lesColoniesDelegation = action.payload;
    },
    lesColoniesDelegationRevoke: (state, action) => {
      state.lesColoniesDelegation = null;
    },    
    laColonieStore: (state, action) => {
      state.laColonie = action.payload;
    },
    laColonieRevoke: (state, action) => {
      state.laColonie = null;
    },
    laColoniePhotoStore: (state, action) => {
      state.laColoniePhoto = action.payload;
    },
    laColoniePhotoRevoke: (state, action) => {
      state.laColoniePhoto = null;
    },

    laVisiteStore: (state, action) => {
      state.laVisite = action.payload;
    },
    laVisiteRevoke: (state, action) => {
      state.laVisite = null;
    },
    lesTravauxFaitsStore: (state, action) => {
      state.lesTravauxFaits = action.payload;
    },
    lesTravauxAFaireStore: (state, action) => {
      state.lesTravauxAFaire = action.payload;
    },    
    laDerniereVisiteStore: (state, action) => {
      state.laDerniereVisite = action.payload;
    },
    lesVisitesStore: (state, action) => {
      state.lesVisites = action.payload;
    },

    leComptageStore: (state, action) => {
      state.leComptage = action.payload;
    },
    leComptageRevoke: (state, action) => {
      state.leComptage = null;
    },
    leDernierComptageStore: (state, action) => {
      state.leDernierComptage = action.payload;
    },
    lesComptagesStore: (state, action) => {
      state.lesComptages = action.payload;
      console.log(action.payload);
    },

    leSoinStore: (state, action) => {
      state.leSoin = action.payload;
    },
    leSoinRevoke: (state, action) => {
      state.leSoin = null;
    },
    leDernierSoinStore: (state, action) => {
      state.leDernierSoin = action.payload;
    },
    lesSoinsStore: (state, action) => {
      state.lesSoins = action.payload;
      console.log(action.payload);
    },

    laRecolteStore: (state, action) => {
      state.laRecolte = action.payload;
    },
    laRecolteRevoke: (state, action) => {
      state.laRecolte = null;
    },
    laDerniereRecolteStore: (state, action) => {
      state.laDerniereRecolte = action.payload;
    },
    lesRecoltesStore: (state, action) => {
      state.lesRecoltes = action.payload;
    },

    lObservationStore: (state, action) => {
      state.lObservation = action.payload;
    },
    lObservationRevoke: (state, action) => {
      state.lObservation = null;
    },
    laDerniereObservationStore: (state, action) => {
      state.laDerniereObservation = action.payload;
    },
    lesObservationsStore: (state, action) => {
      state.lesObservations = action.payload;
    },

    lesHausseVisitesStore: (state, action) => {
      state.lesHausseVisites = action.payload;
    },
    lesHausseVisitesRevoke: (state, action) => {
      state.lesHausseVisites = [];
    }, 

  },
});
export default rucherssSlice.reducer;
export const { 
  apiProprietaireStore ,
  lesColoniesDelegationStore, lesColoniesDelegationRevoke,
  lesColoniesDuRucherStore, lesColoniesDuRucherRevoke,

  lesRuchersTravailStore, lesRuchersTravailRevoke, 
  lesRuchersDeApiStore, lesRuchersDeApiRevoke,
  lesRuchersDelegationStore, lesRuchersDelegationRevoke, leRucherStore, leRucherRevoke,  
  lesColoniesDeApiStore, lesColoniesDeApiRevoke, laColonieStore, laColonieRevoke,
  laColoniePhotoStore, laColoniePhotoRevoke,
  lesTravauxFaitsStore, lesTravauxAFaireStore,
  laDerniereVisiteStore, laVisiteStore, laVisiteRevoke, lesVisitesStore,
  leDernierSoinStore, leSoinStore, leSoinRevoke, lesSoinsStore,
  leDernierComptageStore, leComptageStore, leComptageRevoke, lesComptagesStore,
  laDerniereRecolteStore, laRecolteStore, laRecolteRevoke, lesRecoltesStore,
  laDerniereObservationStore, lObservationStore, lObservationRevoke, lesObservationsStore,
  lesHausseVisitesStore, lesHausseVisitesRevole, 
} = rucherssSlice.actions;
// Actions
//  const { loginSuccess, logoutSuccess } = slice.actions