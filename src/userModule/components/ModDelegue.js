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
import Stack from '@mui/material/Stack';

import { grey, amber, green, red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import RestoreIcon from '@mui/icons-material/Restore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/fr';


import {  createDelegue, getListDelegue } from '../services/authentification';


import { useDispatch, useSelector } from 'react-redux'
import { reineStore } from '../../store/reineslice'
import { treeStore } from '../../store/treeslice'

//import { setToken } from '../services/token';
//import { setLangue, getLangue } from '../../rucherModule/services/getLangue';

import CustomInput from '../../components/CustomInput';
import CustomPicker from '../../components/CustomPicker';
import CustomSwitch from '../../components/CustomSwitch';
import CustomInput1 from '../../components/CustomInput1';
import CustomInput2 from '../../components/CustomInput2';
import CustomButton from '../../components/CustomButton';


import { setAffModRecolte, setAffCreeRecolte, listColoniesdeApi } from '../../store/displayRucherslice';
import { laRecolteStore, laDerniereRecolteStore, laRecolteRevoke, lesRecoltesStore } from '../../store/ruchersslice'

import { geoConicConformalRaw } from 'd3';
import { Construction } from '@mui/icons-material';


//import CustomButton from '../../components/CustomButton';
//import MyModal from '../../components/MyModal';
//import { headerStyles } from '../../components/Styles';
import { prepDate, dispDate } from '../../services/prepDate';
import dayjs from 'dayjs';
import { setAffModDelegue, setAffCreeDelegue } from '../../store/displayDelegueslice';
import {   leDelegueStore, leDelegueRevoke, lesDeleguesStore, lesDeleguesRevoke,

 } from '../../store/delegueslice';

//import i18n from '../../rucherModule/services/i18n';
//import {setIdApplication, getIdApplication} from '../../services/splash';
//import { version } from '../../secrets';
const style = {
  bgcolor: amber[100],
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

function ModDelegue(props) {
  const {
    ...inputProps
  } = props

  const dispatch = useDispatch()
  const [visible, setVisible] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState('');

  const Moment = require('moment');
  const { user } = useSelector(state => state.user);


  const Delegue = useSelector(state => state.delegue).leDelegue;
  var modeModif = false;
  modeModif = useSelector(state => state.displayDelegue).affModDelegue;


  const Initialisation = () => {
    const init = new Object();
    if (modeModif) {
      init.nomdelegue = Delegue.nomdelegue;
    }
    else {
      init.nomdelegue = "";
    }
    return init;
  };

  const ValidationSchema = yup.object().shape({
    nomdelegue: yup
      .string()
      .min(1)
      .max(100, 'trop long')
      .required('nom obligatoire'),
  });


  const FormonSubmit = (data) => {
 /* pas de mode modif
    if (modeModif) {
      modifyDelegue(user.id, Delegue.id, data.nomdelegue)
        .then(() => {
          dispatch(setAffModDelegue(false));
          Promise.all([getListDelegue()])
          .then(async ([Delegues]) => {
              dispatch(lesDeleguesStore(Delegues));console.log(Delegues);
                    })          
        })
    } else {
      */
      createDelegue(user.id, data.nomdelegue)
        .then(() => {
          dispatch(setAffCreeDelegue(false));
          Promise.all([getListDelegue()])
          .then(async ([Delegues]) => {
              dispatch(lesDeleguesStore(Delegues));console.log(Delegues);
                    })          
        })
        .catch((error) => { console.log('aye');console.log(error);
        console.log(error.message);
        setErrorMessage(JSON.parse(error.message).message);
      })
    //};

                  // navigation.replace('Colonie', {idColonie: colonie.id, contenuPickers: contenuPickers, nomRucher : nomRucher, idRucher: idRucher})});
  };



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
            onSubmit={values => FormonSubmit(values)}
          >
            {({
              handleSubmit, isValid, values, setFieldValue, setFieldTouched,
              errors, touched, handleTextInput, withPickerValues, handleChange, handleBlur
            }) => (
              <>



              <Typography sx={{ fontSize: 30, }} align='center'>        {(modeModif) ? 'Modifier Délégué' :
                  'Créer Délégué'}
                </Typography>               
                <Divider />
                <p></p>




                <Field component={CustomInput} name="nomdelegue" label='Libellé '
                  placeholder='Libellé' />

                <Grid style={{ flex: 1 }}></Grid>
                {ErrorMessage ? (
                        <>
                          <Divider variant="middle" />
                          <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                          >
                            <ReportProblemIcon sx={{ fontsize: 20, color: red[700] }} />
                            <Typography fontSize={20} sx={{ color: red[700] }}>{ErrorMessage}</Typography>
                          </Stack>
                        </>
                      ) : null}


                <Grid container display="flex" justifyContent="flex-end">
                  <Tooltip title={<Typography fontSize={20}>Annuler</Typography>} placement="top" sx={{ fontSize: 200 }}>
                    <IconButton onClick={() => { dispatch(setAffModDelegue(false)); dispatch(setAffCreeDelegue(false)) }} >
                      <RestoreIcon sx={{ fontSize: 40, }} />
                    </IconButton>
                  </Tooltip>
                  <IconButton onClick={handleSubmit} sx={{ color: green[700] }} >
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


export default ModDelegue;
