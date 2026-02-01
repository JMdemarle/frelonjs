import React, { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import { Formik, Form, Field } from "formik";
import { Table, TableBody, TableRow, TableCell } from "@mui/material";
import { Modal, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";


import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import dayjs from 'dayjs';



import { dispDate6 } from '../../services/prepDate';

import InfoIcon from "@mui/icons-material/Info";
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
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';



import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { Divider } from '@mui/material';


import CustomTextStd from '../../components/CustomTextStd';
import CustomTextStd2 from '../../components/CustomTextStd2';
import CustomInput from '../../components/CustomInput';
import CustomPicker from '../../components/CustomPicker';
import CustomTitre from '../../components/CustomTitre';
import PositionGPSAffiche from '../../components/PositionGPSAffiche';

import {
  creeReleves
} from '../services/accesFrelon';

import {
  lePiegeStore,

} from '../../store/frelonslice';

import {
  setAffCreePiege, setAffModPiege, setAffDelPiege, setAffListDernierReleveParPiege,

} from '../../store/frelondisplayslice';


function ListDerniersRelevesParPiege() {
  console.log('entree eaff');
  const navigate = useNavigate();

  const { lesDerniersRelevesParPiege } = useSelector(state => state.frelon);
  const { lesTypesInsecte, lesTypesAppat } = useSelector(state => state.frelontype);
  const [errorMessage, setErrorMessage] = useState("");

  const [hoveredId, setHoveredId] = useState(null);
  const [openId, setOpenId] = useState(null);
  const handleOpen = (id) => {
    setOpenId(id);
  };

  const handleClose = () => {
    setOpenId(null);
  };
  console.log(lesTypesInsecte);
  console.log(lesTypesAppat);

  console.log(lesDerniersRelevesParPiege);



  const { user } = useSelector(state => state.user);
  var langue = '';
  if (user) {
    langue = user.langage;
  } else {
    langue = 'fr';
  };


  const dispatch = useDispatch()

  const Initialisation = () => {
    let init = new Object();
    let lesPieges = [];
    for (let piege of lesDerniersRelevesParPiege) {
      const locPiege = new Object();
      locPiege.piege_id = piege.id;
      //locPiege.datePrec = piege.dernier_releve?.date;
      piege.dernier_releve ? locPiege.datePrec = piege.dernier_releve.date : locPiege.datePrec = null;
      locPiege.type_piege = piege.type_piege;
      locPiege.latitude = piege.latitude;
      locPiege.longitude = piege.longitude;
      locPiege.nom = piege.nom;
      locPiege.nomTypePiege = piege.type_piege;
      piege.dernier_releve ? locPiege.appat_id = piege.dernier_releve.appat_id : locPiege.appat_id = '';
      locPiege.appat_idPrec = locPiege.appat_id;
      locPiege.appat = piege.dernier_releve?.appat;
      locPiege.appatPrec = locPiege.appat;
      let lesCaptures = [];
      for (const typeInsecte of lesTypesInsecte) {
        const idTypeInsecte = typeInsecte.id;
        const locCapture = new Object();
        const index = piege?.dernier_releve?.comptages.findIndex(comptage => comptage.typeInsecte === idTypeInsecte);
        locCapture.typeInsecte = typeInsecte.id;
        locCapture.nom = typeInsecte.nom;
        if (index > -1) {
          locCapture.nb = '';
        } else {
          locCapture.nb = '';
        }
        locCapture.nbPrec = piege?.dernier_releve?.comptages[index].nombre;
        lesCaptures.push(locCapture);
      };
      locPiege.lesCaptures = lesCaptures;
      lesPieges.push(locPiege);
    };
    init.lesPieges = lesPieges;

    init.dateS = dayjs();
    return init;
  };

  /*
  const ValidationSchema = yup.object().shape({
    lesPieges: yup.array().of(
      yup.object({
        appat_id: yup.number()
          .required("Appât requis")
          .min(1, "Choisir un appât"),
        appat: yup.string().required("Appât requis"),
        lesCaptures: yup.array().of(
          yup.object({
            nb: yup.number()
              .integer("Entier requis")
              .min(0, "≥ 0 requis")
              .required("Champ requis")
          })
        )
      })
    )

  }); */

  const ValidationSchema = yup.object({
    lesPieges: yup.array().of(
      yup.object({
        appat_id: yup.number().test(
          "appât oblogatoire",
          "Il faut choisir un appât",
          function (value) {
            const { lesCaptures } = this.parent;

            // Vérifie si au moins un nombre est renseigné dans lesCaptures
            const unNombreRenseigne = Array.isArray(lesCaptures) && lesCaptures.some(

              (n) => n.nb !== null && n.nb !== undefined && n.nb !== ""

            );

            // Si aucun nombre n'est renseigné → OK, libelle facultatif
            if (!unNombreRenseigne) return true;

            // Sinon libelle obligatoire et > 0
            return typeof value === "number" && value > 0;
          }
        ),

        lesCaptures: yup.array().of(
          yup.object({
          nb: yup.string()
            .test(
              "is-number",
              "Veuillez saisir un nombre entier ≥ 0",
              (value) => {
                if (value === undefined || value === "") return true;
                return /^[0-9]+$/.test(value); // entier ≥ 0
              }
            )

          })
        ),
      })
    )
  });


  const FormonSubmit = (data) => {

    console.log('FormonSubmit');
    console.log(data);
    let lesReleves = [];
    let laDate = dayjs(data.dateS).format('YYYY-MM-DD');

    for (let piege of data.lesPieges) {
      const locReleve = new Object();
      locReleve.date = laDate;
      locReleve.piege = piege.piege_id;
      locReleve.appat = piege.appat_id;
      locReleve.latitude = piege.latitude;
      locReleve.longitude = piege.longitude;
      piege.appat ? locReleve.detailAppat = piege.appat : locReleve.detailAppat = '';
      let lesCaptures = [];
      let nbCaptures = 0;
      for (let capture of piege.lesCaptures) {
        const locCapture = new Object();
        locCapture.typeInsecte = capture.typeInsecte;
        if (capture.nb) {
          nbCaptures = nbCaptures + capture.nb;
          locCapture.nombre = capture.nb;
        }
        else {
          locCapture.nombre = 0;
        };
        lesCaptures.push(locCapture);
      };
      if (nbCaptures > 0) {
        locReleve.comptages = lesCaptures;
        lesReleves.push(locReleve);
      };

    };
    console.log('lesReleves____');
    console.log(lesReleves);

    creeReleves(lesReleves)
      .then(() => {
        dispatch(setAffListDernierReleveParPiege(false));
        navigate('/') 
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });


  };

    const handleAffichePiege = (piege) => {
  };


  return (

    <>


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

            <Box style={{
              flexDirection: 'row', flex: 0, display: 'flex', alignItems: 'center',
              justifyContent: 'space-evenly', backgroundColor: orange[200],
            }}>
              <Box sx={{ flex: 1 }}>

                <Typography variant="h5" >
                  Les captures du
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>

                  <DatePicker
                    label=""
                    value={values.dateS}
                    format="DD/MM/YYYY"
                    onChange={(newValue) => { setFieldValue("dateS", newValue); }}
                    sx={{
                      backgroundColor: 'white', borderColor: 'blue',
                      borderWidth: 1,
                      borderRadius: 5, height: 35
                    }}

                    slotProps={{
                      textField: {
                        size: 'small',    // réduit la hauteur
                        InputProps: {
                          sx: {
                            typography: "h6", // 👈 style h4
                          },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </Box>
              <Box sx={{ flex: 1 }}>
                <IconButton onClick={() => { dispatch(setAffListDernierReleveParPiege(false)); navigate('/') }} >
                  <CancelPresentationIcon sx={{ fontSize: 30, color: grey[900] }} />
                </IconButton>
              </Box>
            </Box>
            <Box flex={1} // prend tout l'espace restant
              overflow="auto" // active le scroll si nécessaire
            >
              {/* <pre> 
                Values: {JSON.stringify(values, null, 2)}
                Errors:  {JSON.stringify(errors, null, 2)}
                Touched: {JSON.stringify(touched, null, 2)}
              </pre> */}
              <Divider />
              {
                values.lesPieges.map((piege, rowIndex) => (
                  <Box sx={{ m: 0 }} key={rowIndex}>
                    <Box style={{ flexDirection: 'row', flex: 0, display: 'flex', alignItems: 'center' }}>

                      <Card variant="outlined" sx={{ m: 0, backgroundColor: amber[50], borderColor: amber[800], border: 1, borderRadius: '10px', }}
                        onClick={() => { handleAffichePiege(piege) }}
                      >

                        <CardContent>
                          <Box style={{ flexDirection: 'column', flex: 1, display: 'flex', alignItems: 'left' }}>
                            <Box style={{ flexDirection: 'row', flex: 1, display: 'flex', alignItems: 'left' }}>
                              <Box style={{ flex: 6 }}>
                                <CustomTextStd2 style={{ flex: 6 }} label='' contenu={piege.nom} />
                              </Box>
                              <Box style={{ flex: 2 }}>
                                <CustomTextStd2 style={{ flex: 2 }} label='' contenu={piege.type_piege} />
                              </Box>
                              <Box style={{ flex: 2 }}>
                                <CustomTextStd2 label='Dernier relevé' contenu={dispDate6(piege.datePrec, langue)}
                                  labD={7} fieldD={5} />
                              </Box>
                            </Box>
                            <Box style={{ flexDirection: 'column', flex: 1, display: 'flex', alignItems: 'left' }}>
                              <Box style={{ flexDirection: 'row', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box style={{ flex: 5 }}>

                                  <Field component={CustomPicker}
                                    label={'Type Appat'}
                                    liste={lesTypesAppat} itemKey='id' itemLabel='nom' NomListObjet="nom"
                                    modeModif={true}
                                    selectedValue={values.lesPieges[rowIndex].appat_id}
                                    handleChange={(itemIndex) => handleChange('lesPieges[' + rowIndex + '].appat_id')(itemIndex)}
                                    name={'lesPieges[' + rowIndex + '].appat_id'}
                                    required={true}
                                  />
                                </Box>
                                <Box style={{ flex: 1 }}>
                                </Box>
                                <Box style={{ flex: 5 }}>

                                  <Field
                                    component={CustomInput}
                                    name={`lesPieges.${rowIndex}.appat`}
                                    placeholder={'Détail de l\'appat'}
                                    label={null}
                                    labD={0}
                                    fieldD={12}
                                  />
                                </Box>
                                <Box style={{ flex: 1 }}>
                                  {/* Icon */}
                                  <IconButton onClick={() => handleOpen(rowIndex)}>
                                    <InfoIcon fontSize="large" />
                                  </IconButton>
                                </Box>

                              </Box>
                            </Box>
                          </Box>


                          <Dialog open={openId == rowIndex} onClose={handleClose} PaperProps={{
                            sx: {
                              width: "100%",
                              maxWidth: "720px!important",
                            },
                          }}>
                            <DialogTitle>{piege.nom}</DialogTitle>
                            <DialogContent>
                              <Box style={{ flexDirection: 'row', flex: 1, display: 'flex', alignItems: 'left' }}>
                                <Box style={{ flex: 1 }}>
                                  <PositionGPSAffiche lat={piege.latitude} lng={piege.longitude} />
                                </Box>

                                <Box style={{ flexDirection: 'column', flex: 1, display: 'flex', alignItems: 'left' }}>

                                  {piege.lesCaptures.sort((a, b) => a.typeInsecte - b.typeInsecte)
                                                    .map((comptage, indexCapture) => (
                                      <Box key={indexCapture} >

                                        <Box sx={{ flex: 1, alignItems: 'center' }} >
                                          <CustomTextStd2
                                            style={{ flex: 1 }} label={comptage.nom} contenu={comptage.nbPrec}
                                            labD={9} fieldD={3} />
                                        </Box>
                                      </Box>
                                    ))}
                                </Box>
                              </Box>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose}>Fermer</Button>
                            </DialogActions>
                          </Dialog>

                          {errorMessage &&
                            <Typography variant="body2" color="error" align="center">
                              {errorMessage}
                            </Typography>}

                          <Box sx={{ flexDirection: 'row', flex: 1, display: 'flex', alignItems: 'center' }}>
                            {piege.lesCaptures.map((comptage, indexCapture) => (
                              <Box sx={{ flex: 1 }} key={indexCapture}>
                                <Field
                                  component={CustomInput}
                                  name={`lesPieges.${rowIndex}.lesCaptures.${indexCapture}.nb`}
                                  label={comptage.nom}
                                  labD={9}
                                  fieldD={3}
                                />
                              </Box>
                            ))}
                          </Box>

                        </CardContent>
                      </Card>


                    </Box>

                  </Box>
                ))}
            </Box>

            <Box display="flex" style={{ backgroundColor: orange[200] }} alignItems="center" justifyContent="center">
              <IconButton onClick={handleSubmit} sx={{ color: green[700] }} >
                <CheckCircleOutlineIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          </>
        )}

      </Formik>

    </>
  )
};
// <Button type="submit" onClick={() => { dispatch(toggleAffReine()); dispatch(setAffReine(true)) }} >Modifier</Button>

export default ListDerniersRelevesParPiege;