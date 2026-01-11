import React, { useState, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { useNavigate } from "react-router-dom";

import {
  Formik, Field, Form,
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
  withPickerValues
} from 'formik';
import * as yup from 'yup';

import { Container, ButtonGroup, Dropdown } from "react-bootstrap";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import { grey, amber, green } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import RestoreIcon from '@mui/icons-material/Restore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/fr';


import { modifyPiege, createPiege, getListPiegesDePiegeur } from '../services/accesFrelon';


import { useDispatch, useSelector } from 'react-redux'
import { reineStore } from '../../store/reineslice'
import { treeStore } from '../../store/treeslice'

//import { setToken } from '../services/token';
//import { setLangue, getLangue } from '../../rucherModule/services/getLangue';

import CustomInput from '../../components/CustomInput';
import CustomPicker from '../../components/CustomPicker';
import CustomSwitch from '../../components/CustomSwitch';
import CustomSwitchHoriz from '../../components/CustomSwitchHoriz';
import CustomInput1 from '../../components/CustomInput1';
import CustomInput2 from '../../components/CustomInput2';
import CustomButton from '../../components/CustomButton';

import SaisiePositionGPS from '../../components/SaisiePositionGPS.js';


import { setAffModRecolte, setAffCreeRecolte, listColoniesdeApi } from '../../store/displayRucherslice';
import { laRecolteStore, laDerniereRecolteStore, laRecolteRevoke, lesRecoltesStore } from '../../store/ruchersslice'

import { Construction } from '@mui/icons-material';


//import CustomButton from '../../components/CustomButton';
//import MyModal from '../../components/MyModal';
//import { headerStyles } from '../../components/Styles';
import { prepDate, dispDate } from '../../services/prepDate';
import dayjs from 'dayjs';
import { setAffModPiege, setAffCreePiege } from '../../store/frelondisplayslice';
import {
  lePiegeStore, lePiegeRevoke, lesPiegesDePiegeurStore, lesPiegesRevoke,

} from '../../store/frelonslice';

//import i18n from '../../rucherModule/services/i18n';
//import {setIdApplication, getIdApplication} from '../../services/splash';
//import { version } from '../../secrets';
const style = {
  bgcolor: amber[100],
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

function ModPiege(props) {
  const {
    ...inputProps
  } = props

  const dispatch = useDispatch()
  const [visible, setVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const Moment = require('moment');
  const { user } = useSelector(state => state.user);


  const piege = useSelector(state => state.frelon).lePiege;
  console.log('mod piege');
  console.log(piege);
  const { lesTypesPieges } = useSelector(state => state.frelontype);
  const { lesCampagnes } = useSelector(state => state.frelon);
  var modeModif = false;
  modeModif = useSelector(state => state.displayFrelon).affModPiege;



  const Initialisation = () => {
    const init = new Object();
    if (modeModif) {
      init.nom = piege.nom;
      init.TypePiege = piege.TypePiege;
      init.campagne = piege.campagne;
      init.id = piege.id;
      init.piegeur = piege.piegeur;
      init.actif = piege.actif;
      const TempLoc = new Object();
      TempLoc.lat = piege.latitude;
      TempLoc.lng = piege.longitude;
      init.location= TempLoc;
    }
    else {
      init.nom = "";
      init.TypePiege = "";
      init.campagne = "";
      init.id = 0;
      init.piegeur = user.id;
      init.actif = true;
      const TempLoc = new Object();
      TempLoc.lat = null;
      TempLoc.lng = null;
      init.location= TempLoc;
    }
    return init;
  };

  const ValidationSchema = yup.object().shape({
    nom: yup
      .string()
      .min(1)
      .max(25, 'trop long')
      .required('nom obligatoire'),
    campagne: yup
      .string()
      .required('Obligatoire'),
    TypePiege: yup
      .string()
      .required('Obligatoire'),
    
  });


  const FormonSubmit = (data) => {
    setErrorMessage("");
    console.log("FormonSubmit");
    console.log(data);
    /*
          init.nom = "";
      init.TypePiege = "";
      init.campagne = "";
      init.id = 0;
      init.piegeur = user.id;
      init.actif = true;
      */
    var Piege = new Object();
    Piege.TypePiege = data.TypePiege;
    Piege.campagne = data.campagne;
    Piege.piegeur = user.id;
    Piege.actif = data.actif;
    Piege.nom = data.nom;
    Piege.latitude = data.location.lat;
    Piege.longitude = data.location.lng;
    console.log("piege juste avant envoi =========")
    console.log(Piege);
    if (modeModif) {
      Piege.id = data.id;

      modifyPiege(Piege)
        .then(() => {
          dispatch(setAffModPiege(false));
          Promise.all([getListPiegesDePiegeur()])
            .then(async ([pieges]) => {
              dispatch(lesPiegesDePiegeurStore(pieges)); console.log(pieges);
            })

        })
        .catch((error) => {
          console.log(error);
        })
    } else {
      createPiege(Piege)
        .then(() => {
          dispatch(setAffCreePiege(false));
          Promise.all([getListPiegesDePiegeur()])
            .then(async ([pieges]) => {
              dispatch(lesPiegesDePiegeurStore(pieges)); console.log(pieges);
            })

        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(error);
        })
    };

    // navigation.replace('Colonie', {idColonie: colonie.id, contenuPickers: contenuPickers, nomRucher : nomRucher, idRucher: idRucher})});
  };


//console.log(SaisiePositionGPS);

  return (
    <>
      <Modal
        open={visible}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}      >
        <Box sx={{
          width: 500, bgcolor: amber[100],
          border: '2px solid #000', boxShadow: 24, p: 2,
        }} >
          <Formik
            initialValues={Initialisation()}
            validationSchema={ValidationSchema}
            onSubmit={values => { console.log("submit 2"); FormonSubmit(values) }}

          >
            {({
              handleSubmit, isValid, values, setFieldValue, setFieldTouched,
              errors, touched, handleTextInput, withPickerValues, handleChange, handleBlur
            }) => (
              <>



                <Typography sx={{ fontSize: 30, }} align='center'>        {(modeModif) ? 'Modifier Piège' :
                  'Créer Piège'}
                </Typography>
                <Divider />
                <p></p>


                    <SaisiePositionGPS name="location" location={values.location}/>


                <Field component={CustomInput} name="nom" label='Nom  '
                  placeholder='Nom' />


                <Field component={CustomPicker}
                  label={'Type '}
                  liste={lesTypesPieges} itemKey='id' itemLabel='nom' NomListObjet="nom"
                  modeModif={modeModif}
                  selectedValue={values.TypePiege}
                  langue={'fr'}
                  name="TypePiege"
                  handleChange={(itemIndex) => handleChange('TypePiege')(itemIndex)}
                  required={true}
                />


                <Field component={CustomPicker}
                  label={'Campagne '}
                  liste={lesCampagnes} itemKey='id' itemLabel='nom' NomListObjet="nom"
                  modeModif={modeModif}
                  selectedValue={values.campagne}
                  langue={'fr'}
                  name="campagne"
                  handleChange={(itemIndex) => handleChange('campagne')(itemIndex)}
                  required={true}
                />
                <>
                  <Field component={CustomSwitchHoriz} label='Actif'
                    value={values.actif} name='actif'
                    labD={4} fieldD={8} />
                </>
                {errorMessage && 
                <Typography variant="body2" color="error" align="center">
                  {errorMessage}
                </Typography>}
                <Grid container display="flex" justifyContent="flex-end">
                  <Tooltip title={<Typography fontSize={20}>Annuler</Typography>} placement="top" sx={{ fontSize: 200 }}>
                    <IconButton onClick={() => { dispatch(setAffModPiege(false)); dispatch(setAffCreePiege(false)) }} >
                      <RestoreIcon sx={{ fontSize: 40, }} />
                    </IconButton>
                  </Tooltip>
                  <IconButton onClick={() => { console.log('submit'); handleSubmit() }} sx={{ color: green[700] }} >
                    <CheckCircleOutlineIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                </Grid>
              </>
            )}

          </Formik>

        </Box>
      </Modal>
    </>);
}

//<Button onClick={() => dispatch(toggleAffReine()) } >Annuler</Button>


export default ModPiege;
