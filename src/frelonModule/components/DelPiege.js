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


import { deletePiege, getListPiegesDePiegeur } from '../services/accesFrelon';


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
import { setAffModPiege, setAffCreePiege, setAffDelPiege } from '../../store/frelondisplayslice';
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

function DelPiege(props) {
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




  const handleDelPiege = () => {
    setErrorMessage("");

    deletePiege(piege.id)
      .then(() => {
        Promise.all([getListPiegesDePiegeur()])
          .then(async ([itemsPieges]) => {
            dispatch(lesPiegesDePiegeurStore(itemsPieges));
            dispatch(setAffDelPiege(false));
          })
          .catch(console.log('erreur !!!'));

        // navigation.replace('Colonie', {idColonie: colonie.id, contenuPickers: contenuPickers, nomRucher : nomRucher, idRucher: idRucher})});
      });
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




          <Typography sx={{ fontSize: 30, }} align='center'>        Supprimer le piège
          </Typography>
          <Divider />
          <p></p>
          <CustomTextStd2 labD={4} fieldD={8} label="Nom du piège" children={piege.nom} />
          <CustomTextStd2 labD={4} fieldD={8} label="Type du piège" children={piege.nomTypePiege} />
          <CustomTextStd2 labD={4} fieldD={8} label= "Campagne" children={piege.nomCampagne} />


          <Box style={{ flexDirection: 'row', flex: 1, display: 'flex', alignItems: 'left' }}>
            <Box style={{ flex: 1 }}>
              <PositionGPSAffiche lat={piege.latitude} lng={piege.longitude} />
            </Box>

            <Box style={{ flexDirection: 'column', flex: 1, display: 'flex', alignItems: 'left' }}>




            </Box>
          </Box>

        </Box>
      </Modal>
      
    </>);
}

//<Button onClick={() => dispatch(toggleAffReine()) } >Annuler</Button>


export default DelPiege;
