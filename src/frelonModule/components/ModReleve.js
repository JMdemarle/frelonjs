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

import { DatePicker } from '@mui/x-date-pickers/DatePicker';



import { useDispatch, useSelector } from 'react-redux'

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


import { Construction } from '@mui/icons-material';


//import CustomButton from '../../components/CustomButton';
//import MyModal from '../../components/MyModal';
//import { headerStyles } from '../../components/Styles';
import { prepDate, dispDate } from '../../services/prepDate';
import dayjs from 'dayjs';
import { modifyPiege, createPiege, getListPiegesDePiegeur, updateReleve, getRelevesduPiege } from '../services/accesFrelon';

import { setAffModReleve, setAffListReleves } from '../../store/frelondisplayslice';
import {
  lePiegeStore, lePiegeRevoke, lesPiegesDePiegeurStore, lesPiegesRevoke, lesRelevesDuPiegeStore

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

function ModReleve(props) {
  const {
    ...inputProps
  } = props

  const dispatch = useDispatch()
  const [visible, setVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const Moment = require('moment');
  const { user } = useSelector(state => state.user);


  const releve = useSelector(state => state.frelon).leReleve;
  const piege = useSelector(state => state.frelon).lePiege;

  const { lesTypesInsecte, lesTypesAppat } = useSelector(state => state.frelontype);

  console.log('mod releve');
  console.log(piege);
  console.log(releve);

  var modeModif = false;
  modeModif = useSelector(state => state.displayFrelon).affModReleve;



  const Initialisation = () => {
    console.log('Initialisation');
    console.log(releve);
    const init = new Object();
    init.piege_id = piege.id;
    //locPiege.datePrec = piege.dernier_releve?.date;
    init.type_piege = piege.piege;
    init.latitude = piege.latitude;
    init.longitude = piege.longitude;
    init.piege_nom = piege.nom;
    init.TypePiege = piege.TypePiege;
    init.nomTypePiege = piege.nomTypePiege;
    init.appat_id = releve.appat;
    init.detailAppat = releve.detailAppat;
    init.releve_id = releve.id;

    //init.dateS = prepDate(releve.date);
    //init.dateS = releve.date;
    init.dateS = dayjs(releve.date);



    let lesCaptures = [];
    for (const typeInsecte of lesTypesInsecte) {

      const idTypeInsecte = typeInsecte.id;
      const locCapture = new Object();
      const index = releve.comptages.findIndex(comptage => comptage.typeInsecte === idTypeInsecte);
      locCapture.typeInsecte = typeInsecte.id;
      locCapture.nom = typeInsecte.nom;
      if (index > -1) {
        locCapture.nb = releve.comptages[index].nombre;
        locCapture.id = releve.comptages[index].id;

      } else {
        locCapture.nb = '';
        locCapture.id = null;

      }
      lesCaptures.push(locCapture);
    };
    init.lesCaptures = lesCaptures;
    console.log(init);
    return init;
  };

  const ValidationSchema = yup.object().shape({


  });


  const FormonSubmit = (data) => {
    setErrorMessage("");
    console.log("FormonSubmit");
    console.log(data);
    const id = data.releve_id;
    const payload = new Object();
    payload.date = dayjs(data.dateS).format('YYYY-MM-DD');
    payload.appat = data.appat_id;
    payload.piege = data.piege_id;
    payload.detailAppat = data.detailAppat;
    const tempComptages = [];
    for (const capture of data.lesCaptures) {
      if (capture.nb) {
      const comptage = new Object();
      comptage.typeInsecte = capture.typeInsecte;
      comptage.nombre = capture.nb;
      if (capture.id) {
      comptage.id = capture.id;};
      tempComptages.push(comptage);
      }
    };
    payload.comptages = tempComptages;
    updateReleve(id, payload)
      .then(() => {
       getRelevesduPiege(piege.id)
         .then(async (releves) => {
           console.log(releves);
           dispatch(lesRelevesDuPiegeStore(releves));
           dispatch(setAffModReleve(false));
           dispatch(setAffListReleves(true));
         })     
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error);
      })
      ;

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
                <Typography sx={{ fontSize: 30, }} align='center'>        {(modeModif) ? 'Modifier Releve' :
                  'Créer Releve'}
                </Typography>
                <Divider />
                <p></p>
                <Box sx={{ flex: 1 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'fr'}>
                    <DatePicker
                      label=""
                      value={values.dateS}
                      format="DD/MM/YYYY"
                      onChange={(newValue) => { setFieldValue("dateS", newValue || values.dateS); }}
                      sx={{
                        backgroundColor: 'white', borderColor: 'blue',
                        borderWidth: 1,
                        borderRadius: 5,
                      }}

                      slotProps={{
                        textField: {
                          size: 'small',    // réduit la hauteur
                          InputProps: {
                            sx: { typography: "h7", },
                          },
                        },
                      }}
                    />
                  </LocalizationProvider>
                  <Field component={CustomPicker}
                    label={'Type Appat'}
                    liste={lesTypesAppat} itemKey='id' itemLabel='nom' NomListObjet="nom"
                    modeModif={true}
                    selectedValue={values.appat_id}
                    handleChange={(itemIndex) => handleChange('appat_id')(itemIndex)}
                    name={'appat_id'}
                    required={true}
                  />
                  <Field
                    component={CustomInput}
                    name={`detailAppat`}
                    placeholder={'Détail de l\'appat'}
                    label={null}
                    labD={0}
                    fieldD={12}
                  />
                  <Box style={{ flexDirection: 'row', flex: 1, display: 'flex', alignItems: 'left' }}>
                    {values.lesCaptures.map((comptage, indexCapture) => (
                      <Box style={{ flex: 1 }} key={indexCapture}>
                        <Field
                          component={CustomInput}
                          name={`lesCaptures.${indexCapture}.nb`}
                          label={comptage.nom}
                          labD={9}
                          fieldD={3}
                        />
                      </Box>
                    ))}
                  </Box>
                  {errorMessage &&
                    <Typography variant="body2" color="error" align="center">
                      {errorMessage}
                    </Typography>}
                  <Grid container display="flex" justifyContent="flex-end">
                    <Tooltip title={<Typography fontSize={20}>Annuler</Typography>} placement="top" sx={{ fontSize: 200 }}>
                      <IconButton onClick={() => { dispatch(setAffModReleve(false)) }} >
                        <RestoreIcon sx={{ fontSize: 40, }} />
                      </IconButton>
                    </Tooltip>
                    <IconButton onClick={() => { console.log('submit'); handleSubmit() }} sx={{ color: green[700] }} >
                      <CheckCircleOutlineIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                  </Grid>

                </Box>

              </>


            )}

          </Formik>

        </Box>
      </Modal>
    </>);
}

//<Button onClick={() => dispatch(toggleAffReine()) } >Annuler</Button>


export default ModReleve;
