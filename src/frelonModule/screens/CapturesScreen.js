import React, { useState, useEffect, } from 'react';
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";


import Grid2 from '@mui/material/Grid'; // Grid version 2
import Paper from '@mui/material/Paper';
import { ColorLensOutlined } from '@mui/icons-material';
import { grey, amber, green } from '@mui/material/colors';
import Box from '@mui/material/Box';

//import ListEleveur from '../components/listEleveur'

import { useSelector, useDispatch } from 'react-redux'
import MenuBar from '../../components/MenuBar'

import { userStore } from '../../store/userslice';


import ListPieges from '../components/ListPieges';
import ModPiege from '../components/ModPiege';
import ListDerniersRelevesParPiege from '../components/ListDerniersRelevesParPiege';



import { cPickersStore } from '../../store/cPickersslice'
//import { userStore} from '../../store/userslice'
import { lesColoniesDeApiStore, lesColoniesDelegationStore, lesRuchersTravailStore } from '../../store/ruchersslice'
//import { } from '../../store/displayRucherslice'
import { setTitreBar, setAffLogin } from '../../store/displayslice'
//import { setAffModColonie, setAffCreeColonie, setAffModRucher, setAffCreeRucher } from '../../store/displayRucherslice';

import {
  lesTypesPiegesStore, lesTypesInsecteStore, lesTypesAppatStore, affListDernierReleveParPiegeStore

} from '../../store/frelontypeslice';
import {
  lesCampagnesStore, lesPiegesDePiegeurStore, lesDerniersRelevesParPiegeStore

} from '../../store/frelonslice';
import {
  setAffListPieges, setAffCreePiege, setAffModPiege, setAffDelPiege, setAffListDernierReleveParPiege

} from '../../store/frelondisplayslice';
import i18n from '../services/i18n';


import {
  retrievePiegeurTotal
} from '../../userModule/services/authentification';
import {
  getDerniersRelevesParPiege, getListCampagne, getListPiegesDePiegeur, getListTypeInsecte,
  getListTypeAppat
} from '../services/accesFrelon';
import Typography from '@mui/material/Typography';
import { List } from '@mui/material';
import { get } from '../../services/fetch';

function CapturesScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  //const [ lRuchers , setLRuchers] = useState ([]);
  const [allFetch, setAllFetch] = useState();

  const { titreBar, affGenealogie, affLogin } = useSelector(state => state.display)

  const { affListPieges, affCreePiege, affModPiege, affDelPiege, affListDernierReleveParPiege } = useSelector(state => state.displayFrelon);

  //const [affLogin, setAffLogin] = useState(false);


  const [rucherLoadingErrorMessage, setRucherLoadingErrorMessage] = useState('');
  const { user } = useSelector(state => state.user);

  var langue = '';


  dispatch(setTitreBar('CAPTURES'));


  const handleRucherLoadingError = (res) => {
    if (res.error === 401) {
      setRucherLoadingErrorMessage("Connectez vous pour accéder à cette fonction");
    } else {
      setRucherLoadingErrorMessage(res.message);
    };
  };

  useEffect(() => {
    console.log('use effect');
    if (user) {
      langue = user.langage;
    } else {
      //navigate("/reine");
      var token = '';

      if (localStorage.getItem('token')) {
        try {
          token = JSON.parse(localStorage.getItem('token'))
        } catch (e) {
          token = null;
        }
      } else {
        token = null;
      };
      if (token) {
        Promise.all([retrievePiegeurTotal(),])
          .then(async ([userValues,]) => {
            console.log(userValues);
            dispatch(userStore(userValues));
            //dispatch(apiProprietaireStore (userValues.id));
          })
      }
      else {
        dispatch(setAffLogin(true));
      }
    };
    if (typeof (user) !== 'undefined' && user != null) {
      //dispatch(setAffModColonie(false))
      //dispatch(setAffCreeColonie(false))

      let mounted = true;
      let itemApi = user.id;
      setAllFetch(false);
      Promise.all([getDerniersRelevesParPiege(), getListCampagne(), getListPiegesDePiegeur(), getListTypeInsecte(),
      getListTypeAppat()],)
        .then(async ([itemsReleves, itemsCampagne, itemsPieges, itemsInsecte, itemTypeAppat]) => {
          if (mounted) {
            dispatch(lesDerniersRelevesParPiegeStore(itemsReleves));
            dispatch(lesCampagnesStore(itemsCampagne));
            dispatch(lesPiegesDePiegeurStore(itemsPieges));
            dispatch(lesTypesInsecteStore(itemsInsecte));
            dispatch(lesTypesAppatStore(itemTypeAppat));
            dispatch(setAffListDernierReleveParPiege(true));
            console.log('les releves');
            console.log(itemsReleves);

            console.log('les campagnes');
            console.log(itemsCampagne);
            console.log('les types insecte');
            console.log(itemsInsecte);
            console.log('les types appat-----------------------------');
            console.log(itemTypeAppat);


            setAllFetch(true);
          }

        })
      /*
      Promise.all([getFirstColonie(), getFirstVisite()])
        .then(async ([itemCol, itemVis]) => {
          if (mounted) {
            let idVisite = itemVis.id; let idColonie = itemCol.id;;

            Promise.all([getOptionsColonie(JSON.stringify(idColonie)), getListRace(), getListMarquage(langue),
            getListTypeRuches(), getListTypPb(langue), getListTypCR(langue), getListTypMedoc(), getListUniNourri(langue),
            getOptionsVisite(JSON.stringify(idVisite)), listColoniesdeApi(itemApi), getListRuchersDeApi(itemApi),
            listColoniesDelegation(itemApi), getListTravaux(langue), getListTypNourri(), getListTypComptage()])
              .then(async ([itemOptCol, itemsTypRa, itemsMar, itemsTypRu, itemsTypPb, itemsTypCR, itemsTypMedoc,
                itemsUniNourri, itemOptVis, coloniesdeApi, ruchersDeApi, coloniesDelegation, itemTravaux, itemsTypNourri,
                itemTypComptage
              ]) => {
                { if (mounted) { i18n.locale = langue } };
                //{if(mounted) {setLRuchers(intemRuchers);}};
                { if (mounted) { setAllFetch(true) } };
                {
                  if (mounted) {
                    //             console.log(itemOptVis);
                    //           console.log(itemsMar);

                    var cPickers = {
                      optCol: itemOptCol, listRac: itemsTypRa, listMarc: itemsMar, typRuc: itemsTypRu,
                      TypPb: itemsTypPb, TypCR: itemsTypCR, listMedoc: itemsTypMedoc, listUniNourri: itemsUniNourri,
                      optVis: itemOptVis, apiculteur: user, langue: langue, delegue: false, listTravaux: itemTravaux,
                      listNourri: itemsTypNourri, listTypComptage: itemTypComptage
                    };
                    //            var cPickers = {optCol: optionsColonie, listRac: listRace, listMarc: listMarquage, typRuc: listTypeRuches};

                    //console.log(cPickers);
                    console.log(coloniesdeApi);
                    dispatch(cPickersStore(cPickers));
                    dispatch(lesColoniesDeApiStore(coloniesdeApi));
                    dispatch(lesColoniesDelegationStore(coloniesDelegation));
                    //dispatch(lesRuchersTravailStore(ruchersDeApi));


                  }
                }
              })
          }
        })
        .catch(handleRucherLoadingError);
        */

      return () => { mounted = false; setAllFetch(false); };
    }
  }, [user])



  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        height="100vh" // prend toute la hauteur disponible de son parent
      >
        <MenuBar />
        {affListDernierReleveParPiege && <ListDerniersRelevesParPiege />}
      </Box>


    </>
  );
}


export default CapturesScreen;


