import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';



import {
  Formik, Field, Form,
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
  withPickerValues
} from 'formik';
import * as yup from 'yup';
import { createAccount, login, retrievePiegeurTotal, modPiegeur } from '../services/authentification';

//import { setToken } from '../services/token';
import { useDispatch, useSelector } from 'react-redux'
import { userStore } from '../../store/userslice'


//import UserForm from '../forms/UserForm';
import CustomInput from '../../components/CustomInput';
//import CustomButton from '../../components/CustomButton';
//import { headerStyles, styles } from '../../components/Styles';

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

const CreateAccount = ({ toggleAff, affiche, ...props }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleOpen = () => toggleAff(true);
  const handleClose = () => toggleAff(false);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleLogin = () => {


  }

  // onSubmit method
  const FormonSubmit = (data) => {
    localStorage.setItem('token', null);

    createAccount(data.nom, data.zzz, data.password1, data.password2)
      .then(async (res) => {
        setErrorMessage('');
        console.log(res);
        localStorage.setItem('token', JSON.stringify({ token: res.key }));
        //localStorage.setItem('token', JSON.stringify(res));
        //login(data.nom, data.password1)

        Promise.all([retrievePiegeurTotal(),])

          .then(async (res3) => {
            console.log('res3');
            console.log(res3);
            dispatch(userStore(res3));
            const idPiegeur = res3[0].id;
            console.log('idPiegeur');
            console.log(idPiegeur); 

            modPiegeur(idPiegeur, data.nom, 'fr')
              .then(() => {
                console.log('piegeur modifié');
                toggleAff();
                navigate('/');
              })
          })
      })

      .catch((res) => {
        console.log('erreur');
        console.log(res);
        console.log(res.message);
        setErrorMessage(res.message);
        //setErrorMessage(res.message);
      });
  };


  const Initialisation = () => {
    const init = new Object();
    init.nom = "";
    init.zzz = "";
    init.password1 = "";
    init.password2 = "";
    return init
  };

  const ValidationSchema = yup.object().shape({
    nom: yup
      .string()
      .min(1, 'tropCourt')
      .max(20, 'tropLong')
      .required('nomObligatoire'),
    zzz: yup
      .string()
      .email()
      .required('emailObligatoire'),
    password1: yup
      .string()
      .required('motPasseObligatoire')
      .min(8, 'error.tropCourt'),
    password2: yup
      .string()
      .oneOf([yup.ref('password1'), null], 'lesMotsDePasseDoiventEtreIdentiques')

  });


  return (
    <Modal
      open={affiche}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper>
        <Box sx={style}>

          <Formik
            validationSchema={ValidationSchema}
            initialValues={Initialisation()}
            onSubmit={(values) => FormonSubmit(values)}
          >
            {({
              handleSubmit, isValid, values, setFieldValue, setFieldTouched,
              errors, touched, handleTextInput, withPickerValues, handleChange, handleBlur
            }) => (
              <>
                <div>


                  <Form >

                    <Typography variant="h5">Création de compte </Typography>
                    <Field component={CustomInput} name="nom" label={'nom'} placeholder={('nom')} autoComplete="new-password" />
                    <Field component={CustomInput} name="password1" label={'mot de passe'} placeholder={'mot de passe'} type="password" autoComplete="new-password" />
                    <Field component={CustomInput} name="password2" label={'mot de passe'} placeholder={'mot de passe / vérification'} type="password" autoComplete="new-password" />
                    <Field component={CustomInput} name="zzz" label={'email'} placeholder={'email'} autoComplete="new-password" />
                    {errorMessage ? (
                      <Typography color="red">{errorMessage}</Typography>
                    ) : null}
                    <Grid container display="flex" justifyContent="flex-end">

                      <IconButton onClick={() => {console.log('onsub');handleSubmit()}} sx={{ color: green[700] }} >
                        <CheckCircleOutlineIcon sx={{ fontSize: 40 }} />
                      </IconButton>
                    </Grid>

                  </Form>
                </div>
              </>
            )}
          </Formik>
          {/*  </KeyboardAwareScrollView>      */}
        </Box>
      </Paper>
    </Modal>

  );
}

export default CreateAccount;

