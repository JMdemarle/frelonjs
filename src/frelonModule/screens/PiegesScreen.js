import React, { useState, useEffect, } from 'react';
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";


import Grid2 from '@mui/material/Grid'; // Grid version 2
import Paper from '@mui/material/Paper';
import { ColorLensOutlined } from '@mui/icons-material';
import { grey, amber, green } from '@mui/material/colors';

//import ListEleveur from '../components/listEleveur'

import { useSelector, useDispatch } from 'react-redux'
import MenuBar from '../../components/MenuBar'

import { userStore } from '../../store/userslice';


import ListPieges from '../components/ListPieges';
import ModPiege from '../components/ModPiege';
import DelPiege from '../components/DelPiege';
import ListReleves from '../components/ListReleves';
import ModReleve from '../components/ModReleve';
import DelReleve from '../components/DelReleve';




//import { } from '../../store/displayRucherslice'
import { setTitreBar, setAffLogin } from '../../store/displayslice'
//import { setAffModColonie, setAffCreeColonie, setAffModRucher, setAffCreeRucher } from '../../store/displayRucherslice';

import { lesTypesPiegesStore, lesTypesInsecteStore, lesTypesAppatStore } from '../../store/frelontypeslice' ;
import { lesCampagnesStore, lesPiegesDePiegeurStore } from '../../store/frelonslice';
import { setAffListPieges, setAffCreePiege, setAffModPiege, setAffDelPiege, setAffListReleves } from '../../store/frelondisplayslice';
import i18n from '../services/i18n';


import {
  retrievePiegeurTotal
} from '../../userModule/services/authentification';
import { getListTypePiege, getListCampagne, getListPiegesDePiegeur, getListTypeInsecte,
  getListTypeAppat
 } from '../services/accesFrelon';
import Typography from '@mui/material/Typography';
import { List } from '@mui/material';

function PiegesScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  //const [ lRuchers , setLRuchers] = useState ([]);
  const [allFetch, setAllFetch] = useState();

  const { titreBar, affGenealogie, affLogin } = useSelector(state => state.display)

  const { affListPieges, affCreePiege, affModPiege, affDelPiege, affListReleves, affCreeReleve, affModReleve,
    affDelReleve

   } = useSelector(state => state.displayFrelon);

  //const [affLogin, setAffLogin] = useState(false);


  const [rucherLoadingErrorMessage, setRucherLoadingErrorMessage] = useState('');
  const { user } = useSelector(state => state.user);

  var langue = '';


  dispatch(setTitreBar('PIEGES'));


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
          .catch((err) => {
            token = null; 
          });
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
      Promise.all([getListTypePiege(),getListCampagne(), getListPiegesDePiegeur(), getListTypeInsecte(),
        getListTypeAppat()
      ])
        .then(async ([itemsTypPiege, itemsCampagne, itemsPieges, itemTypInsectes, itemTypeAppat]) => { 
          if (mounted) {
            dispatch(lesTypesPiegesStore(itemsTypPiege));
            dispatch(lesCampagnesStore(itemsCampagne));
            dispatch(lesPiegesDePiegeurStore(itemsPieges));
            dispatch(lesTypesInsecteStore(itemTypInsectes));
            dispatch(lesTypesAppatStore(itemTypeAppat));
            
            dispatch(setAffListPieges (true));
            dispatch(setAffListReleves (false));

          
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
      <MenuBar />


          <Paper elevation={10} sx={{ bgcolor: amber[100] }}>
            {affListPieges && <ListPieges />}
            {affCreePiege && <ModPiege />}
            {affModPiege && <ModPiege />}
            {affDelPiege && <DelPiege />}
            {affListReleves && <ListReleves />}
            {affCreeReleve && <ModReleve />}
            {affModReleve && <ModReleve />}
            {affDelReleve && <DelReleve />}

            


          </Paper>



    </>
  );
}


export default PiegesScreen;


