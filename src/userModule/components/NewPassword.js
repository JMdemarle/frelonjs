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
import { createAccount, login, retrieveApiculteurTotal, modApiculteur, confirmPassword } from '../services/authentification';

//import { setToken } from '../services/token';
//import { setIdApiculteur } from '../../rucherModule/services/idApiculteur';
import { useDispatch, useSelector } from 'react-redux'
import { userStore } from '../../store/userslice'

import {  setAffNewPassword } from '../../store/displayslice'

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

const NewPassword = (props) => {
  const {token,  ...inputProps} = props
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const { affNewPassword } = useSelector(state => state.display)

  console.log(token);

  const toggleLogin = () => {


  }

  // onSubmit method
  const FormonSubmit = (data) => {
    console.log('on submit');
    confirmPassword(token, data.password1)
  };


  const Initialisation = () => {
    const init = new Object();
    init.password1 = "";
    init.password2 = "";
    return init
  };

  const ValidationSchema = yup.object().shape({
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
      open={affNewPassword}
      onClose={() => {dispatch(setAffNewPassword(false))}}
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

                    <Typography variant="h5">Votre nouveau mot de passe</Typography>
                    <Field component={CustomInput} name="password1" label={'mot de passe'} placeholder={'mot de passe'} type="password" autoComplete="new-password" />
                    <Field component={CustomInput} name="password2" label={'mot de passe'} placeholder={'mot de passe / vérification'} type="password" autoComplete="new-password" />
                    {errorMessage ? (
                      <Typography color="red">{errorMessage}</Typography>
                    ) : null}
                    <Grid container display="flex" justifyContent="flex-end">

                      <IconButton onClick={handleSubmit} sx={{ color: green[700] }} >
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

export default NewPassword;

