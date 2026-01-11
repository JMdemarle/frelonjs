import React, { useState, useEffect, } from 'react';



import Grid2 from '@mui/material/Grid'; // Grid version 2
import Paper from '@mui/material/Paper';
import { ColorLensOutlined } from '@mui/icons-material';
import { grey, amber, green } from '@mui/material/colors';

//import ListEleveur from '../components/listEleveur'

import { useSelector, useDispatch } from 'react-redux'
import MenuBar from '../../components/MenuBar'
import { login, retrieveApiculteurTotal, postPasswordReset } from '../services/authentification';
import { userStore } from '../../store/userslice';
import {   leDelegueStore, leDelegueRevoke, lesDeleguesStore, lesDeleguesRevoke,

 } from '../../store/delegueslice';
 import {     setAffDelegue, setAffModDelegue, setAffCreeDelegue, setAffDelDelegue, setAffLesDelegues,
   } from '../../store/displayDelegueslice';

import { setTitreBar, setAffLogin } from '../../store/displayslice';
import {
  getListDelegue
} from '../services/authentification';

import AfficheLesDelegues from '../components/AfficheLesDelegues';
import ModDelegue from '../components/ModDelegue';
import DelDelegue from '../components/DelDelegue';




function DelegueScreen() {
  const dispatch = useDispatch();
  const [rucherLoadingErrorMessage, setRucherLoadingErrorMessage] = useState('');

  //const [ lRuchers , setLRuchers] = useState ([]);
  const [allFetch, setAllFetch] = useState();

  const { user } = useSelector(state => state.user);
  const { affDelegue, affModDelegue, affCreeDelegue, affDelDelegue
   } = useSelector(state => state.displayDelegue)


  var langue = '';


  dispatch(setTitreBar('DELEGUES'));


  const handleRucherLoadingError = (res) => {
    if (res.error === 401) {
      setRucherLoadingErrorMessage("Connectez vous pour accéder à cette fonction");
    } else {
      setRucherLoadingErrorMessage(res.message);
    };
  };

  useEffect(() => {
    let mounted = true;

    console.log('use effect');
    if (user) {
      langue = user.langage;
    } else {
      //navigate("/reine");
      const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;

      if (token) {
        Promise.all([retrieveApiculteurTotal(),])
          .then(async ([userValues, ]) => {
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
 
        let mounted = true;
        let itemApi = user.id;
        setAllFetch(false);
        Promise.all([getListDelegue()])
          .then(async ([Delegues]) => {
            if (mounted) {
              dispatch(lesDeleguesStore(Delegues));console.log(Delegues);
              setAllFetch(true);


            }
          })
          .catch(handleRucherLoadingError);
  
      return () => { mounted = false; setAllFetch(false); };
    }
  }, [user])



  return (
    <>
      <MenuBar />
      <Grid2 container>

        <Grid2 xs={4} >

          {allFetch && <AfficheLesDelegues />}
          <p>Test</p>
        </Grid2>
        <Grid2 xs={8} >
        <Paper>
         
          {affCreeDelegue && <ModDelegue />}
          {affDelDelegue && <DelDelegue />}

          {/*
            {affModDelegue && <ModDelegue />}

   
*/}

          </Paper>

        </Grid2>
      </Grid2>


    </>
  );
}


export default DelegueScreen;


