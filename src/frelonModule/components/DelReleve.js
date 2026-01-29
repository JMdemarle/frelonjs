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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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




import { useDispatch, useSelector } from 'react-redux'

//import { setToken } from '../services/token';
//import { setLangue, getLangue } from '../../rucherModule/services/getLangue';

import CustomTextStd2 from '../../components/CustomTextStd2';
import PositionGPSAffiche from '../../components/PositionGPSAffiche';


import { Construction } from '@mui/icons-material';


//import CustomButton from '../../components/CustomButton';
//import MyModal from '../../components/MyModal';
//import { headerStyles } from '../../components/Styles';
import { prepDate, dispDate } from '../../services/prepDate';
import dayjs from 'dayjs';
import { setAffModReleve, setAffCreeReleve, setAffDelReleve, setAffListReleves 

} from '../../store/frelondisplayslice';
import {
  leReleveStore, leReleveRevoke, lesRelevesRevoke, lesRelevesDuPiegeStore

} from '../../store/frelonslice';
import { deleteReleve, getRelevesduPiege } from '../services/accesFrelon';


//import i18n from '../../rucherModule/services/i18n';
//import {setIdApplication, getIdApplication} from '../../services/splash';
//import { version } from '../../secrets';
const style = {
  bgcolor: amber[100],
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

function DelReleve(props) {
  const {
    ...inputProps
  } = props

  const dispatch = useDispatch()
  const [visible, setVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const Moment = require('moment');
  const { user } = useSelector(state => state.user);


  const releve = useSelector(state => state.frelon).leReleve;
  const { lePiege } = useSelector(state => state.frelon);
  
  console.log('mod releve');
  console.log(releve);
  const { lesTypesPiees } = useSelector(state => state.frelontype);
  const { lesCampagnes } = useSelector(state => state.frelon);
  var modeModif = false;
  modeModif = useSelector(state => state.displayFrelon).affModReleve;
  var affDelReleve = useSelector(state => state.displayFrelon).affDelReleve;

  const handleCloseIgnore = () => {
    dispatch(setAffDelReleve(false));
  };



  const handleCloseAgree = () => {
    setErrorMessage("");
        deleteReleve(releve.id)
          .then(() => {
           getRelevesduPiege(lePiege.id)
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
  };


  //console.log(SaisiePositionGPS);

  return (
    <>

      <Dialog
        open={affDelReleve}
        keepMounted
        onClose={handleCloseIgnore}
        aria-describedby="alert-dialog-slide-description"
        maxWidth='md'
        fullWidth

      >
        <Container>

          <DialogTitle>{"Suppression d'un releve"}</DialogTitle>


          <DialogContent dividers>
            <CustomTextStd2 labD={4} fieldD={8} label="Nom du piège" children={lePiege.nom} />
            <CustomTextStd2 labD={4} fieldD={8} label="Type du piège" children={lePiege.nomTypePiege} />
            <CustomTextStd2 labD={4} fieldD={8} label="Campagne" children={lePiege.libCampagne} />


            <Box style={{ flexDirection: 'row', flex: 1, display: 'flex', alignItems: 'left' }}>

              <Box style={{ flexDirection: 'column', flex: 1, display: 'flex', alignItems: 'left' }}>
                <Box style={{ flexDirection: 'row', flex: 0, display: 'flex', alignItems: 'left' }}>
                  <Box style={{ flex: 1 }} >
                    <CustomTextStd2 label='' contenu={releve.date} />
                  </Box>
                  <Box style={{ flex: 2 }} >
                    <CustomTextStd2 label='' contenu={releve.nomAppat} />
                  </Box>
                  <Box style={{ flex: 2 }} >
                    <CustomTextStd2 label='' contenu={releve.detailAppat} />
                  </Box>
                </Box>
                <Box style={{ flexDirection: 'row', flex: 0, display: 'flex', alignItems: 'left' }}>

                  {releve.comptages.map((comptage, indexCapture) => (
                    <Box key={indexCapture} style={{ flex: 1 }}>
                      <CustomTextStd2
                        label={comptage.nomTypeInsecte} contenu={comptage.nombre}
                        labD={9} fieldD={3} />
                    </Box>
                  ))}
                </Box>



              </Box>
            </Box>
          </DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Confirmez-vous cette Suppression ?
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleCloseIgnore}>Annuler</Button>
            <Button onClick={handleCloseAgree}>Supprimer</Button>
          </DialogActions>
        </Container>
      </Dialog>
    </>);
}

//<Button onClick={() => dispatch(toggleAffReine()) } >Annuler</Button>


export default DelReleve;
