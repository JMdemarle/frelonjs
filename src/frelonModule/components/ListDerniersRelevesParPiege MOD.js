import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from "formik";
import { Table, TableBody, TableRow, TableCell } from "@mui/material";

import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import dayjs from 'dayjs';



import { dispDate } from '../services/prepDate';

import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import 'dayjs/locale/fr';

import TextField from '@mui/material/TextField';

import EditIcon from '@mui/icons-material/Edit';

import Tooltip from '@mui/material/Tooltip';

import { red, amber, grey, orange, green } from '@mui/material/colors';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { Divider } from '@mui/material';


import CustomTextStd from '../../components/CustomTextStd';
import CustomTextStd2 from '../../components/CustomTextStd2';
import CustomInput from '../../components/CustomInput';



import {
  lePiegeStore,

} from '../../store/frelonslice';

import {
  setAffCreePiege, setAffModPiege, setAffDelPiege

} from '../../store/frelondisplayslice';


function ListDerniersRelevesParPiege() {
  console.log('entree eaff');
  const { lesDerniersRelevesParPiege } = useSelector(state => state.frelon);
  const { lesTypesInsecte } = useSelector(state => state.frelontype);
  console.log(lesDerniersRelevesParPiege);
  const [lesPiegesReleves, setLesPiegesReleves] = useState([]);

  /*
  useEffect(() => {
    let lesPiegesFormat = [];
    for (let piege of lesDerniersRelevesParPiege) {
      const locPiege = new Object();
      locPiege.piege_id = piege.id;
      locPiege.date = piege.dernier_releve?.date;
      locPiege.type_piege = piege.type_piege;
      //locPiege.actif = piege.actif;
      locPiege.nom = piege.nom;
      locPiege.nomTypePiege = piege.type_piege;
      locPiege.appat_id = piege.dernier_releve?.appat_id;
      locPiege.appat = piege.dernier_releve?.appat;
      let lesCaptures = [];
      for (const typeInsecte of lesTypesInsecte) {
        const idTypeInsecte = typeInsecte.id;
        //const index = piege?.dernier_releve?.comptages?.indexOf(idTypeInsecte);
        //const index = personnes.findIndex(personne => personne.nom === rechercheNom);
        const locCapture = new Object();
        const index = piege?.dernier_releve?.comptages.findIndex(comptage => comptage.typeInsecte === idTypeInsecte);
        locCapture.typeInsecte = typeInsecte.id;
        locCapture.nom = typeInsecte.nom;
        if (index > -1) {
          locCapture.nb = piege?.dernier_releve?.comptages[index].nombre;
        } else {
          locCapture.nb = 0;
        }
        lesCaptures.push(locCapture);
      };
      locPiege.lesCaptures = lesCaptures;
      lesPiegesFormat.push(locPiege);
      console.log('lesPiegesFormat');
      console.log(lesPiegesFormat);
      setLesPiegesReleves(lesPiegesFormat);
    };


  }, []);

*/



  const { user } = useSelector(state => state.user);

  const langue = user.langage;
  let itemApi = user.id;


  const dispatch = useDispatch()

  const Initialisation = () => {
    let init = new Object();
      

    init.dateS = dayjs();
    console.log(init);

    /*
    let init = [];
    let locPieges = [];
    for (let lePiege of lesPiegesReleves) {
      const locPiege = new Object(); 
      locPiege.piege_id = lePiege.piege_id;
      locPiege.type_piege = lePiege.type_piege;
      locPiege.actif = lePiege.actif;
      locPiege.nom = lePiege.nom;
      locPiege.nomTypePiege = lePiege.nomTypePiege;

      locPiege.date = new Date();
      locPiege.appat_id = lePiege.appat_id;
      locPiege.appat_id_prec = lePiege.appat_id;
      locPiege.appat = lePiege.appat;
      locPiege.appat_prec = lePiege.appat;
      const locCaptures = [];
      for (let capture of lePiege.lesCaptures) {
        const locCapture = new Object();
        locCapture.typeInsecte = capture.typeInsecte;

        locCapture.nb = 0;
        locCapture.nb_prec = capture.nb;
        locCaptures.push(locCapture);
      };
      locPiege.lesCaptures = [...locCaptures ];
      console.log('locPiege');
      console.log(locPiege);
      init.push(locPiege);

    };
    console.log('locPieges');
    console.log(locPieges);
    init.pieges = [...locPieges];
    console.log('init');
    console.log(init);
    console.log(init.pieges);
*/
    console.log('init 2 '
    );
    console.log(init);
    return init;
  };

  const ValidationSchema = yup.object().shape({


  });


  const FormonSubmit = (data) => {
    let laDate = dayjs(data.dateS).format('YYYY-MM-DD');

    console.log('FormonSubmit');
    console.log(data);
  };


  const nouveauPiege = () => {
    dispatch(setAffCreePiege(true));
  };


  const handleEditClick = (piege) => {
    console.log('handleEditClick');
    console.log(piege);
    dispatch(lePiegeStore(piege));
    dispatch(setAffModPiege(true));
  };


  const handleDelClick = (piege) => {
    dispatch(lePiegeStore(piege));
    dispatch(setAffDelPiege(true));
  };

  const handleAffichePiege = (piege) => {
  };

  return (

    <>
      <Paper elevation={10} sx={{ m: 1, bgcolor: amber[100] }} >
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          height: 640, overflow: "hidden", overflowY: "scroll",

        }}

        >
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
                <pre>{JSON.stringify(values, null, 2)}</pre>

                <Typography variant="h4" component="div" align="center">
                  Les captures
                </Typography>

                <LocalizationProvider dateAdapter={AdapterDayjs}>

                  <DatePicker
                    label="Date de relève"
                    dateFormat="dd/MM/yyyy"
                    value={values.dateS}
                    onChange={(newValue) => { setFieldValue("dateS", values.dateS); }}
                  />
                </LocalizationProvider>
                <Divider />
                </>
            )}
  
          </Formik>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Button variant="text" endIcon={<AddCircleOutlineIcon />} onClick={() => { nouveauPiege(); }}>
            Nouveau Piege
          </Button>

        </Box>


      </Paper>
    </>
  )
};
// <Button type="submit" onClick={() => { dispatch(toggleAffReine()); dispatch(setAffReine(true)) }} >Modifier</Button>

export default ListDerniersRelevesParPiege;