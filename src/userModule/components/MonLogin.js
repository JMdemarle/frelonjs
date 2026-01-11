import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';


import Typography from '@mui/material/Typography';
import { green, red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';


import {
  Formik, Field, Form,
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
  withPickerValues
} from 'formik';
import * as yup from 'yup';

import { Button, Container, ButtonGroup, Dropdown } from "react-bootstrap";
import { login, retrievePiegeurTotal, postPasswordReset } from '../services/authentification';

import { useDispatch, useSelector } from 'react-redux'
import { userStore } from '../../store/userslice'
import { typfecondationStore } from '../../store/typfecondationslice'
import { setAffLogin, setAffResetPassword } from '../../store/displayslice'
import { setAffVisite} from '../../store/displayRucherslice'
import {
  laColonieStore, laDerniereVisiteStore, laVisiteStore, laColonieRevoke,
  leDernierSoinStore, leSoinStore,
  laDerniereRecolteStore, laRecolteStore,
  laDerniereObservationStore, lObservationStore, 
  lesColoniesDeApiStore, lesRuchersTravailStore, 
  apiProprietaireStore, lesColoniesDelegationStore
} from '../../store/ruchersslice'

//import { setToken } from '../services/token';
//import { setLangue, getLangue } from '../../rucherModule/services/getLangue';


import CustomInput from '../../components/CustomInput';
import { ConstructionOutlined } from '@mui/icons-material';
//import CustomButton from '../../components/CustomButton';
//import MyModal from '../../components/MyModal';
//import { headerStyles } from '../../components/Styles';

//import i18n from '../../rucherModule/services/i18n';
//import {setIdApplication, getIdApplication} from '../../services/splash';
//import { version } from '../../secrets';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const MonLogin = ({ affiche, ...props }) => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  //const [visible, setVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const { affLogin,  } = useSelector(state => state.display)
  console.log('mon login');


  const navigate = useNavigate();
  //const handleOpen = () => toggleAff(true);
  //const handleClose = () => toggleAff(false);


  const toggleLogin = () => {


  }
  const FormonSubmit = (data) => {
    localStorage.setItem('token', "");
    Promise.all([login(data.username, data.password)])
      .then( ([res]) => {
        console.log('token reçu');
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res));
        Promise.all([retrievePiegeurTotal(),])
          .then(async ([userValues]) => {
            console.log(userValues);
            dispatch(userStore(userValues));
            dispatch(setAffLogin(false));


            //toggleAff();
            //navigate('/reine');
          })
      })
      .catch((err) => {
        console.log({ err });
        console.log(err.message);
        setErrorMessage(err.message);

      })




  };



  const Initialisation = () => {
    const init = new Object();
    init.username = "";
    init.password = "";
    return init
  };

  const ValidationSchema = yup.object().shape({
    username: yup
      .string()
      .min(1, 'tropCourt')
      .max(20, 'tropLong')
      .required('nomObligatoire'),
    password: yup
      .string()
      .required('motPasseObligatoire')
      .min(8, 'motPasseObligatoire'),
  });



  const passwordReset = () => {
    console.group('appel password reset');
    dispatch(setAffLogin(false));
    dispatch(setAffResetPassword(true));
 //   postPasswordReset('jm.demarle@outlook.fr')

  };


  return (
    <Modal
      open={affLogin}
      onClose={() => {dispatch(setAffLogin(false))}}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper>
        <Box sx={style}>
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
                <div>


                  <Form>
                    <Container>
                      <Typography variant="h5">Connexion </Typography>

                      <Field component={CustomInput} name="username" label={'Nom'} placeholder={'Nom'} />
                      <Field component={CustomInput} name="password" label={'Mot de passe'} placeholder={'Mot de passe'} type="password" />
                      {errorMessage ? (
                        <>
                          <Divider variant="middle" />
                          <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                          >
                            <ReportProblemIcon sx={{ fontsize: 20, color: red[700] }} />
                            <Typography fontSize={20} sx={{ color: red[700] }}>{errorMessage}</Typography>
                          </Stack>
                        </>
                      ) : null}
                      <Grid container display="flex" justifyContent="flex-end">

                        <IconButton onClick={handleSubmit} sx={{ color: green[700] }} >
                          <CheckCircleOutlineIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                      </Grid>

                    </Container>

                  </Form>
                  <Link component="button" variant="body2" onClick={() => { passwordReset() }}> 
                  <Typography variant='h6'>
                  J'ai oublié mon mot de passe
                  </Typography>
                  </Link>


                </div>
              </>
            )}
          </Formik>
        </Box>
      </Paper>
    </Modal>
  );
}


export default MonLogin;



