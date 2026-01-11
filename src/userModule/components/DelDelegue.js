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
import { grey, amber, green } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import RestoreIcon from '@mui/icons-material/Restore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/fr';


import { modifyDelegue, createDelegue, getListDelegue, delDelegue } from '../services/authentification';


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
import { setAffModDelegue, setAffCreeDelegue, setAffDelDelegue } from '../../store/displayDelegueslice';
import {
  leDelegueStore, leDelegueRevoke, lesDeleguesStore, lesDeleguesRevoke,
  lEntreeStore, lEntreeRevoke, lesEntreesStore, lesEntreesRevoke,

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

function DelDelegue(props) {
  const {
    ...inputProps
  } = props

  const dispatch = useDispatch()
  const [visible, setVisible] = useState(true);
  const Moment = require('moment');
  const { user } = useSelector(state => state.user);


  const Delegue = useSelector(state => state.delegue).leDelegue;
  var modeModif = false;
  const affDelDelegue = useSelector(state => state.displayDelegue).affDelDelegue;


  const handleCloseIgnore = () => {
    dispatch(setAffDelDelegue(false));
  };


  const handleDelError = (res) => {
    if (res.error !== 204) {
      console.log('pb suppression');
    }
  };

  const handleCloseAgree = () => {
    delDelegue(Delegue)
      .then(() => {
        Promise.all([getListDelegue()])
          .then(async ([Delegues]) => {
            dispatch(lesDeleguesStore(Delegues)); console.log(Delegues);
            dispatch(setAffDelDelegue(false));
          })
      })
      .catch(console.log('erreur !!!'));
  };






  return (
    <>
      <Dialog
        open={affDelDelegue}
        keepMounted
        onClose={handleCloseIgnore}
        aria-describedby="alert-dialog-slide-description"
        maxWidth='sm'
        fullWidth
      >
        <DialogTitle>{"Suppression de votre délégué" + ": " + Delegue.nomdelegue}</DialogTitle>
        <DialogContent>

        </DialogContent>

        <DialogContentText id="alert-dialog-slide-description">
          Confirmez-vous cette Suppression ?
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleCloseIgnore}>Annuler</Button>
          <Button onClick={handleCloseAgree}>Supprimer</Button>
        </DialogActions>
      </Dialog>
    </>);
}

//<Button onClick={() => dispatch(toggleAffReine()) } >Annuler</Button>


export default DelDelegue;
